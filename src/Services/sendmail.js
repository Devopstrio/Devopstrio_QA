export const sendEmail = async (data) => {
  const toEmail = data.toOverride || import.meta.env.VITE_FORM_SUBMIT_EMAIL || "meena.s@devopstrioglobal.com";
  const endpoint = `https://formsubmit.co/ajax/${toEmail}`;

  let body;
  let headers = {
    Accept: "application/json",
  };

  if (data.file) {
    const formData = new FormData();
    formData.append("name", data.fullName || "New Submission");
    formData.append("email", data.email);
    formData.append("subject", data.subject || "New Contact Form Submission");
    formData.append("message", data.message);
    formData.append("attachment", data.file);
    formData.append("_template", "box");
    formData.append("_captcha", "false");
    formData.append("_replyto", data.email);
    body = formData;
  } else {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify({
      name: data.fullName,
      email: data.email,
      subject: data.subject || "New Contact Form Submission",
      message: data.message,
      _template: "box",
      _captcha: "false",
      _replyto: data.email,
    });
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error("Email sending failed");
  }

  return result;
};
