import { Request, Response } from 'express'
import EmailService from '../service/EmailService'

var users: { name: string, empresa: string }[] = [
    {
        name: 'Eduardo',
        empresa: 'Kbase'
    },
    {
        name: 'Bruna',
        empresa: 'Kbase'
    },
    {
        name: 'Elen',
        empresa: 'Meta'
    },
    {
        name: 'Rafael',
        empresa: 'Cwi'
    }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
           to: {
                name: 'Gabriel',
                email: 'gabriel@kbase.com.br'
            },
            message: {
                subject: 'Hellou world!!',
                body: 'Mensagem de boas vindas para você :D novo usuario'
            }
        })

        return res.send()
    }
}