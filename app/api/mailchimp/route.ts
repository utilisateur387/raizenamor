export default async function(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {firstName, lastName, email, phone, message} = req.body;

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = process.env.MAILCHIMP_DATACENTER; // e.g., us1, us2, etc.

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      NAME: name,
      MESSAGE: message,
    },
  };
}