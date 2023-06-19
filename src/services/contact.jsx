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

  // Post form data to backend
  const response = await fetch('/api/contact', {method: 'POST', body, headers})

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.message);
  }

  return response.json();
}

export default processContactForm;