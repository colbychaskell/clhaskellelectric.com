const processContactForm = async (name, email, phone, topic, message) => {
  const _csrf = 'dummy';
  // TODO: Send form data to backend
  const body = JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    topic: topic,
    message: message,
    csrf: _csrf,
  });
  const headers = {'Content-Type': 'application/json'};

  const url = 'http://cl-haskell-backend.azurewebsites.net/api/contact';
  // Post form data to backend
  const response = await fetch(url, {method: 'POST', body, headers})

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.message);
  }

  return response.json();
}

export default processContactForm;