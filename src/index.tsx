import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model  } from 'miragejs'

createServer({
  models : {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'freelancer WebSite',
        type: 'deposit',
        category: 'Business',
        amount: 16000.00,
        createdAt: new Date('2021-09-15 10:00:00'),
      }, {
        id: 2,
        title: 'Freelancer Api REST',
        type: 'deposit',
        category: 'Business',
        amount: 160000.00,
        createdAt: new Date('2021-09-15 10:00:00'),
      }, {
        id: 3,
        title: 'Rent',
        type: 'withdraw',
        category: 'Home',
        amount: 1500.00,
        createdAt: new Date('2021-09-30 10:00:00'),
      }]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('transactions', (schema, { requestBody }) => {
      const data = JSON.parse(requestBody)
      return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
