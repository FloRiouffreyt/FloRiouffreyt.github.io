import React, { useEffect, useState } from 'react'
import { Todo, TodoControls, CreateTodo } from '../components'
import { getTodos, updateTodo } from '../apiCalls/todo.js'

import './Todos.css'

const Todos = () => {

    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    const todoListComplete = []

    const fetchData = async () => {
        const response = await getTodos()
        if (response.status === 200) {
            const todosList = document.querySelectorAll('.todo')
            todosList.forEach((item, index) => {
                item.setAttribute('data-index', index)
            })
            setTodos(response.data.todos);
        }
    }

    // <-- DRAG & DROP
    let dragStartIndex
    const dragContainer = document.querySelector('.todos__list')
    let dragItems = document.querySelectorAll('.todo')

    function dragStart() {
        dragStartIndex = +this.closest('li').getAttribute('data-index')
    }
    function dragEnter() {
        this.classList.add('drag_over')
    }
    function dragLeave() {
        this.classList.remove('drag_over')
    }
    function dragOver(e) {
        e.preventDefault()
    }
    function dragDrop(e) {
        const dragEndIndex = +this.closest('li').getAttribute('data-index')
        const rect = this.getBoundingClientRect()
        const rectCenter = rect.top + rect.height / 2
        const mousePosition = e.clientY
        swapItems(dragStartIndex, dragEndIndex, rectCenter, mousePosition)
        const dragItemsUpdated = document.querySelectorAll('.todo')
        dragItems = [...dragItemsUpdated]
        fetchData()

        this.classList.remove('drag_over')
    }

    function swapItems(fromIndex, toIndex, middle, mousePosition) {
        const itemOne = dragItems[fromIndex]
        const itemTwo = dragItems[toIndex]

        if (typeof itemOne === 'object' && typeof itemTwo === 'object') {
            if (middle > mousePosition) {
                dragContainer.insertBefore(itemOne, itemTwo)
                } else {
                dragContainer.insertBefore(itemOne, itemTwo.nextSibling)
                }
        } else {
            return
        }
    }

    dragItems.forEach(item => {
        item.addEventListener('dragstart', dragStart)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)
        item.addEventListener('dragover', dragOver)
        item.addEventListener('drop', dragDrop)
    })
    // DRAG & DROP -->

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        todos.map(todo => {
            if (!todo.completed) {
                todoListComplete.push(todo)
            }
        })
        setCount(todoListComplete.length);
    }, [todos]);

    return (
        <>
            <CreateTodo fetchData={fetchData} />
            <div className='todos'>
                <ul className="todos__list">
                    {
                        todos.length > 0 && todos.map((item, index) => {
                            return <Todo key={item._id} item={item} index={index} fetchData={fetchData} />
                        })
                    }
                </ul>
                {todos.length > 0 && <TodoControls count={count} fetchData={fetchData} />}
            </div>

            {todos.length > 0 && <div className='todos__reorder'>
                <p>Drag and drop to reorder list</p>
            </div>}

        </>
    )
}

export default Todos