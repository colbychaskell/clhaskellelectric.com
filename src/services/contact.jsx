const processContactForm = async (name, email, phone, topic, message) => {
  const _csrf = 'dummy';
  const body = JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    topic: topic,
    message: message,
    csrf: _csrf,
  });

  const headers = {'Content-Type': 'application/json'};
  const url = "https://clhaskellelectric-74pv534tgq-uc.a.run.app/api/contact";
  
  // Post form data to backend
  const response = await fetch(url, {method: 'POST', body, headers})

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.message);
  }

  return response.json();
}

export default processContactForm;