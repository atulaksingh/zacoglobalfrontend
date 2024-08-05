// pages/api/comments.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { content, name, email, post } = req.body;
  
      try {
        const response = await fetch("http://django:8000/api/comments/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content, name, email, post }),
        });
  
        if (response.ok) {
          const newComment = await response.json();
          res.status(200).json(newComment);
        } else {
          res.status(response.status).json({ message: response.statusText });
        }
      } catch (error) {
        res.status(500).json({ message: "An error occurred while submitting the comment." });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  