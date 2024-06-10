function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const errorHandlingMiddleware = (req, res, next) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const regex = /^[A-Z][a-z]*$/;
  const passRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

  if (!regex.test(firstName) || !regex.test(lastName)) {
    return res.json({
      message: "Not a Valid name, First letter must be Capitalized",
    });
  }

  if (!passRegex.test(password)) {
    return res.json({
      message:
        "Not a valid password,password contains at least one special character, one uppercase letter, and one numeric character, min length: 8",
    });
  }

  if (!isValidEmail(email)) {
    return res.json({
      message: "Not a valid Email Address",
    });
  }

  if (phone.length < 10) {
    return res.json({
      message: "Phone number is too short",
    });
  }
  next();
};

module.exports = errorHandlingMiddleware;
