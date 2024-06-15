import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { NextRequest } from 'next/server';
import {z} from 'zod'
export const runtime = 'edge';

const app = new Hono().basePath('/api')

app
.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})
.get("/ayush/:test", (c) => {
    const test = c.req.param("test")
    return c.json({
        message : "Hello world!!",
        test: test
    })
})
.post('/post',
    zValidator('form',
        z.object({
            username: z.string(),
            password : z.number()
        })
    ),
    (c)=>{
        
        return c.json({
            ok : "checked"
        })
    }
)


export const GET = handle(app)
export const POST = handle(app)