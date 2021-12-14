module.exports = async (req, res) => {
  const nodemailer = require('nodemailer')
  require('dotenv').config()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dev.autosender@gmail.com',
      pass: process.env.PASS
    }
  })

  const sender = `${req.body.name} <${req.body.email}>`
  const message = `${req.body.message}`

  if (message) {
    await transporter.sendMail({
      from: `${sender}`,
      text: `${message}`,
      subject: 'Formulário de contato',
      to: `nathanssfirmo@gmail.com`,
      replyTo: `${sender}`
    })
  }
    res.end(`    
    <script>
    window.location.href = "http://nathan-firmo.vercel.app/tanks.html"
    </script>`)
}