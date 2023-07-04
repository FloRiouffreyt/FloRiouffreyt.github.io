import Todo from '../models/Todo.js'

export const getTodo = async(req, res) => {
    const {id} = req.params
    try {
        
        const todo = await Todo.findById(id)
        if (!todo)
            return res.status(404).json({msg: "Todo not found"})

        if (todo.user.toString() !== req.user)
            return res.status(401).json({msg: "Not authorized"})
        
        res.status(200).json({msg: "Todo found", todo})

    } catch (error) {
        console.error(error.message)
        res
            .status(500)
            .json({errors: 'Internal server error'})
    }
}

export const getTodos = async(req, res) => {
    try {

        const todos = await Todo.find({user: req.user}).sort({order: 1})

        res.status(200).json({msg: "Todo found", todos})
        
    } catch (error) {
        console.error(error.message)
        res
            .status(500)
            .json({errors: 'Internal server error'})
    }
}

export const createTodo = async(req, res) => {
    const {title} = req.body
    try {

        const todo = await Todo.create({
            title, order: 0, completed: false, updating: false, user: req.user
        })
        res.status(201).json({msg: "Todo created successfully", todo})

    } catch (error) {
        console.error(error.message)
        res
            .status(500)
            .json({errors: 'Internal server error'})
    }
}

export const updateTodo = async(req, res) => {
    const {id} = req.params
    const {title, order, completed, updating} = req.body
    try {

        const todo = await Todo.findById(id)
        if (!todo)
            return res.status(404).json({msg: "Todo not found"})
        if (todo.user.toString() !== req.user)
            return res.status(401).json({msg: "Not authorized"})

        todo.title = title
        todo.order = order
        todo.completed = completed
        todo.updating = updating

        await todo.save()
        res.status(200).json({msg: "Todo updated successfully"})

    } catch (error) {
        console.error(error.message)
        res
            .status(500)
            .json({errors: 'Internal server error'})
    }
}

export const deleteTodo = async(req, res) => {
    const {id} = req.params
    try {

        const todo = await Todo.findById(id)
        if (!todo)
            return res.status(404).json({msg: "Todo not found"})
        if (todo.user.toString() !== req.user)
            return res.status(401).json({msg: "Not authorized"})

        await todo.deleteOne()
        res.status(200).json({msg: "Todo deleted successfully"})

    } catch (error) {
        console.error(error.message)
        res
            .status(500)
            .json({errors: 'Internal server error'})
    }
}