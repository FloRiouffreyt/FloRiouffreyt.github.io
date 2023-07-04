import React, { useState } from 'react'

import { createTodo } from '../apiCalls/todo.js';

import { RxPlus } from 'react-icons/rx'
import './CreateTodo.css'

const CreateTodo = ({fetchData}) => {

    const [title, setTitle] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const data = { title }

        const response = await createTodo(data)
        if (response.status === 201) {
            setTitle('')
            fetchData()
        } else {
            alert(response.response.data.msg)
        }
    }

    return (
        <div className='createTodo'>
            <form className='createTodo__form' onSubmit={handleSubmit}>
                <div className='createTodo__form_input'>
                    <div className='createTodo__form_input-check'></div>
                    <input
                        type="text"
                        id='createTodo'
                        placeholder='Create a new todo...'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <button type='submit' id='submitCreate'>
                        <RxPlus size={'1.5rem'} color='var(--font-color-body)'/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo