const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const MAIL_STRINGS = require('../../config/mail.json')

router.post('/submitContact', submitContact)
router.post('/submitFeedback', submitFeedback)

module.exports = router

function failedResponse(res, _message) {
  console.log(`[Mail Controller] : ${_message.log}`)
  return res
    .status(401)
    .json({ status: 401, data: null, error: _.data.message })
}

function successResponse(res, _message) {
  console.log(`[Mail Controller] : ${_message.log}`)
  return res
    .status(200)
    .json({ status: "200", data: null, error: null })
}

function invalidRequest(res, _message) {
  console.log(`[Mail Controller] : ${_message.log}`)
  const message = _message.response
  return res.status(400).json({ status: 400, message })
}

async function submitContact(req, res, next) {
  console.log(`[Mail Controller]   : ${MAIL_STRINGS.MAIL.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: MAIL_STRINGS.MAIL.FAILED,
      response: MAIL_STRINGS.MAIL.INVALID,
    })
  }

  var _ = payload.data

  let mailDetails = {
    from: 'medialablti2@gmail.com',
    to: ['john.missale@lntinfotech.com', 'Shahzad.Khan@lntinfotech.com' ],
    subject: 'Contact Us Info',
    bcc: ['Usama.Ansari@lntinfotech.com', 'IstyakAlam.Ansari@lntinfotech.com'],
    html: '<table border="1" align="center" cellpadding="0" cellspacing="0" width="70%" style="border-collapse: collapse;"> <tr bgcolor="#000078"> <td> <p align="center" style="margin: 0; padding: 20px 0 30px 0; font-weight: bold; color: #ffffff;">Contact Us Info</p> </td> </tr> <tr> <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;"> <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">        <tr>            <td>                <p style="margin: 0; width="50%">First Name</p></td> <td> <p style="margin: 0; width="50%">' + _.firstName + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Last Name</p> </td> <td><p style="margin: 0; width="50%">' + _.lastName + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Email Address</p></td> <td> <p style="margin: 0; width="50%">' + _.emailAddress + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Contact Number</p> </td> <td><p style="margin: 0; width="50%">' + _.contactNumber + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Country</p> </td> <td><p style="margin: 0; width="50%">' + _.country + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Company Name</p></td> <td> <p style="margin: 0; width="50%">' + _.companyName + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Industry</p></td> <td> <p style="margin: 0; width="50%">' + _.industry + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Interested in</p></td> <td> <p style="margin: 0; width="50%">' + _.services + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Referred By</p></td> <td> <p style="margin: 0; width="50%">' + _.referredBy + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Description</p> </td> <td><p style="margin: 0; width="50%">' + _.description + '</p>            </td>        </tr>    </table></td> </tr> </table>'
  }

  let resp = await wrapedSendMail(mailDetails)

  if (resp) {
    successResponse(res, { log: MAIL_STRINGS.MAIL.SUCCESS })
  } else {
    failedResponse(res, { log: MAIL_STRINGS.MAIL.FAILED })
  }
}

async function submitFeedback(req, res, next) {
  console.log(`[Mail Controller]   : ${MAIL_STRINGS.MAIL.ATTEMPT}`)
  let payload = {}
  try { payload = { ...req.body } } catch (error) {
    invalidRequest(res, {
      log: MAIL_STRINGS.MAIL.FAILED,
      response: MAIL_STRINGS.MAIL.INVALID,
    })
  }

  var _ = payload.data

  let mailDetails = {
    from: 'medialablti2@gmail.com',
    to: ['john.missale@lntinfotech.com', 'Shahzad.Khan@lntinfotech.com' ],
    // to: ['Usama.Ansari@lntinfotech.com', 'IstyakAlam.Ansari@lntinfotech.com'],
    subject: 'New Idea Info',
    bcc: ['Usama.Ansari@lntinfotech.com', 'IstyakAlam.Ansari@lntinfotech.com'],
    html: '<table border="1" align="center" cellpadding="0" cellspacing="0" width="70%" style="border-collapse: collapse;"> <tr bgcolor="#000078"> <td> <p align="center" style="margin: 0; padding: 20px 0 30px 0; font-weight: bold; color: #ffffff;">New Idea Info</p> </td> </tr> <tr> <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;"> <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">        <tr>            <td>                <p style="margin: 0; width="50%">First Name</p></td> <td> <p style="margin: 0; width="50%">' + _.firstName + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Last Name</p> </td> <td><p style="margin: 0; width="50%">' + _.lastName + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Email Address</p></td> <td> <p style="margin: 0; width="50%">' + _.emailAddress + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Contact Number</p> </td> <td><p style="margin: 0; width="50%">' + _.contactNumber + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Country</p> </td> <td><p style="margin: 0; width="50%">' + _.country + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Company Name</p></td> <td> <p style="margin: 0; width="50%">' + _.companyName + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Industry</p></td> <td> <p style="margin: 0; width="50%">' + _.industry + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Interested in</p></td> <td> <p style="margin: 0; width="50%">' + _.services + '</p>            </td>        </tr>        <tr>            <td>                <p style="margin: 0; width="50%">Description</p> </td> <td><p style="margin: 0; width="50%">' + _.description + '</p>            </td>        </tr>    </table></td> </tr> </table>'
  }

  let resp = await wrapedSendMail(mailDetails)

  if (resp) {
    successResponse(res, { log: MAIL_STRINGS.MAIL.SUCCESS })
  } else {
    failedResponse(res, { log: MAIL_STRINGS.MAIL.FAILED })
  }
}

async function wrapedSendMail(mailOptions) {
  return new Promise((resolve, reject) => {
    let mailTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'medialablti2@gmail.com',
        pass: 'Medialab@012340',
      },
      enable_start_tls: true,
      enable_authentication: true
    })

    mailTransporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        resolve(false)
      }
      else {
        resolve(true)
      }
    })
  })
}


