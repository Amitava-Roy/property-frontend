export async function fetchProperties() {
  const res = await fetch(
    "https://property-project.onrender.com/api/list-properties"
  );

  return res.json();
}
