import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import { getTodo, deleteTodo, updateTodo } from '../apiCalls/todo.js'

import './Todo.css'
import { RxCross1, RxPencil1, RxCheck } from 'react-icons/rx'

const Todo = ({item, index, fetchData}) => {

    const [todoItem, setTodoItem] = useState({})
    const [updating, setUpdating] = useState(false)
    const [updateTitle, setUpdateTitle] = useState(item.title)
    
    const controlBtns = document.querySelectorAll('.todoControls__btn-item')

    const fetchOneData = async () => {
        const response = await getTodo(item._id)
        if (response.status === 200) {
            setTodoItem(response.data.todo);
        }
    }

    const setIndex = async () => {
        const id = item._id
        const data = {
            ...item,
            order: index,
        }
        const response = await updateTodo(id, data)
        if(response.status === 200) {
            fetchData()
        } else {
            alert(response.response.data.msg)
        }
    }

    useEffect(() => {
        fetchOneData()
        setIndex()
    }, []);

    const handleComplete = async e => {
        //FE
        setTodoItem({
            ...todoItem,
            completed: e.target.checked,
        })
        for (let i = 0; i < controlBtns.length; i++) {
            if (controlBtns[i].classList.contains('active')) {
                if (controlBtns[i].id === 'active' || controlBtns[i].id === 'completed') {
                    e.target.parentNode.style.display = 'none';
                }
            }
        }
        //BE
        const id = item._id
        const data = {
            ...item,
            completed: e.target.checked,
        }
        const response = await updateTodo(id, data)
        if(response.status === 200) {
            fetchData()
        } else {
            alert(response.response.data.msg)
        }
    }

    const handleSubmitUpdate = async e => {
        //FE
        setTodoItem({
            ...todoItem,
            title: updateTitle,
            updating: false
        })
        setUpdating(false)
        //BE
        e.preventDefault()
        const id = item._id
        const data = {
            ...item,
            title: updateTitle,
            updating: false
        }
        const response = await updateTodo(id, data)
        if(response.status === 200) {
            Swal.fire({
                title: 'Updated!',
                position: 'bottom',
                toast: true,
                width: 'auto',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    title: 'swal-text',
                    popup: 'swal-bg'
                }
            })
        } else {
            alert(response.response.data.msg)
        }
    }

    const deleteTodoItem = () => {
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
                handleDelete()
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

    const handleDelete = async () => {
        const response = await deleteTodo(item._id)
        if (response.status === 200) {
            fetchData()
        } else {
            alert(response.response.data.msg)
        }
    }

    return (
        <>
            {!updating ? (
            <li className='todo' data-index={index} draggable>
                <input 
                    className='todo__completed'
                    type="checkbox"
                    name="completed"
                    defaultChecked={todoItem.completed}
                    onClick={handleComplete}
                />
                <p className='todo__title' key={todoItem._id}>{todoItem.title}</p>
                <div className='todo__btn'>
                    {!todoItem.completed && (
                        <button className='todo__btn_update btn' onClick={() => setUpdating(true)}>
                            <RxPencil1 size={'1.125rem'} color='var(--font-color-body)' />
                        </button>
                    )}
                    <button className='todo__btn_delete btn' onClick={deleteTodoItem}>
                        <RxCross1 size={'1.125rem'} color='var(--font-color-body)'/>
                    </button>
                </div>
            </li>
            )
            :
            <li className='todo'>
                <form className='todo__updating' onSubmit={handleSubmitUpdate}>
                    <input type="text" name="update" defaultValue={todoItem.title} onChange={e => setUpdateTitle(e.target.value)}/>
                    <button type='submit'>
                        <RxCheck size={'1.125rem'} color='var(--font-color-body)' />
                    </button>
                </form>
            </li>
            }
        </>
    )
}

export default Todo