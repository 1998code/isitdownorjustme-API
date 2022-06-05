export default async function (req, res) {
  const url = req.query.url
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response;
    res.status(200).json({ status: data.status, statusText: data.statusText, isUP: data.status === 200, isDown: data.status !== 200 });
  } catch (error) {
    res.status(200).json({ status: 0, statusText: error.code, isUP: false, isDown: true });
  }
}
