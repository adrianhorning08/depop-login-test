// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://webapi.depop.com/api/v1/auth/login/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en-CA;q=0.9,en-AU;q=0.8,en;q=0.7",
          "content-type": "application/json",
          "sec-ch-ua":
            '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-px-cookie":
            "eyJ1IjoiZTVjZjRkMDAtNWExMy0xMWVkLTk0OWEtZTFjNjRlMzQ4OTFmIiwidiI6ImViNjBhM2EwLTVhMGUtMTFlZC1iZmE3LTY4NDk2NzYyNzk2OCIsInQiOjE2NjczMzY5NDAwMjksImgiOiI4MWZjYzI1MDU0OGZlYjZmOTZmZjQ0ZGJlMTY5ZmIxMWNlNTYwZDE3OTJmMDhmMzI1NjVmMDk4OTM0ZWQ5YzdkIn0",
        },
        referrer: "https://www.depop.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: '{"username":"m.adrian.horning@gmail.com","password":"asdfasdfasdfa"}',
        method: "POST",
        mode: "cors",
        credentials: "omit",
      }
    );
    const data = await response.json();
    console.log("data", data);
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
}
