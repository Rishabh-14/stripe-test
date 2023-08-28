export default (req, res) => {
  const { password } = req.body;
  if (password === "secretPassword") {
    // This is just an example. Never hard-code passwords.
    res.setHeader("Set-Cookie", "loggedIn=true; path=/; HttpOnly");
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};
