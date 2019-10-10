'use strict'

class EmailController {

	async send({ request }){
		const nodemailer = require('nodemailer');
		const data = request.only(["emails","assunto"]);

		let transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	      user: 'fixunesp@gmail.com',
	      pass: 'fixunesp1234'
	    }
	  });

		let info = await transporter.sendMail({
	    from: 'fixunesp@gmail.com',
	    to: data['emails'],
	    subject: 'FeedBack FixUnesp',
	    // text: assunto,
	    html: data['assunto']
	  },
	    function (err, data) {
	      if (err) {
	        console.log(err);
	        return err;
	      }
	    }
	  );
	
	}


	}

module.exports = EmailController
