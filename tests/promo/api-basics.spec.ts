const data = { completed: false, id: '3', title: 'start learning about cloud' }
const completed = { completed: true }

//Testing list: https://github.com/JoanEsquivel/testing-lists

import { test, expect } from '@playwright/test'
test.describe('API testing basics', () => {
    test('should create a new todo by API request', async ({ request }) => {
        const newTodoRes = await request.post('/todos', { data })
        expect(newTodoRes.status()).toEqual(201)
        expect(newTodoRes.statusText()).toEqual('Created')
        expect(await newTodoRes.json()).toEqual(data)
    })
    test('should get todo by API request', async ({ request }) => {
        const getTodoRes = await request.get(`/todos`)
        const body = await getTodoRes.json()
        expect(body).toContainEqual(data)
    })
    test('should update a todo by API request', async ({ request }) => {
        const updateTodoRes = await request.patch(`/todos/${data.id}`, {
            data: completed,
        })
        const body = await updateTodoRes.json()
        expect(body.completed).toEqual(true)
        expect(body.title).toEqual('start learning about cloud')
    })
    test('should delete an existing todo by API request', async ({
        request,
    }) => {
        const deleteTodoRes = await request.delete(`/todos/${data.id}`)
        expect(deleteTodoRes.status()).toEqual(200)
    })
})
