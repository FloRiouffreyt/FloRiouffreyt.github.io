import React from 'react'
import Swal from 'sweetalert2'

import { getTodos, deleteTodo } from '../apiCalls/todo.js'

import './TodoControls.css'

const TodoControls = ({count, fetchData}) => {

    const controlBtns = document.querySelectorAll('.todoControls__btn-item')

    const allTodos = document.querySelectorAll('.todo')
    
    const handleFilter = e => {
        for (let i = 0; i < controlBtns.length; i++) {
            if (controlBtns[i].classList.contains('active')) {
                controlBtns[i].classList.remove('active')
            }
        }
        e.target.classList.add('active')
        
        if (e.target.id === "all") {
            allTodos.forEach(todo => {
                todo.style.display = 'flex'
            })
        }
        if (e.target.id === "active") {
            allTodos.forEach(todo => {
                todo.style.display = 'flex'
                if (todo.childNodes[0].checked) {
                    todo.style.display = 'none'
                }
            })
        }
        if (e.target.id === "completed") {
            allTodos.forEach(todo => {
                todo.style.display = 'flex'
                if (!todo.childNodes[0].checked) {
                    todo.style.display = 'none'
                }
            })
        }
    }

    const handleDeleteCompleted = async (id) => {
        const response = await deleteTodo(id)
        if (response.status === 200) {
            fetchData()
        } else {
            alert(response.response.data.msg)
        }
    }

    const handleGetCompleted = async() => {
        const response = await getTodos()
        if(response.status === 200) {
            response.data.todos.map(todo => {
                if (todo.completed) {
                    handleDeleteCompleted(todo._id)
                }
            })
        } else {
            alert(response.response.data.msg)
        }
    }

    const deleteCompleted = () => {
        Swal.fire({
            title: 'Are you sure?',
            showCancelButton: true,
            cancelButtonColor: 'crimson',
            confirmButtonText: 'Delete',
            customClass: {
                title: 'swal-text',
                popup: 'swal-bg',
                confirmButton: 'swal-btn-conf',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                handleGetCompleted()
                Swal.fire({
                    title: 'Deleted!',
                    position: 'bottom',
                    toast: true,
                    width: 'auto',
                    icon: 'success',
                    iconColor: 'crimson',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        title: 'swal-text',
                        popup: 'swal-bg'
                    }
                })
            }
        })
    }


    return (
        <div className='todoControls'>
            <div className='todoControls__count'>{count} items left</div>
            <div className='todoControls__btn'>
                <button id='all' onClick={handleFilter} className='todoControls__btn-item active'>All</button>
                <button id='active' onClick={handleFilter} className='todoControls__btn-item'>Active</button>
                <button id='completed' onClick={handleFilter} className='todoControls__btn-item'>Completed</button>
            </div>
            <div className='todoControls__clear'>
                <button onClick={deleteCompleted}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoControls