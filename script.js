const WHATSAPP = "201559980896";

function normalizePhone(value) {
  return value.replace(/[^\d]/g, "");
}

document.querySelectorAll("[data-product]").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.product;
    const select = document.getElementById("product");
    if (select) select.value = value === "العرض - الكريم + السيرم" ? "العرض - الكريم + السيرم - 400 جنيه" : value === "الكريم" ? "الكريم - 250 جنيه" : "السيرم - 200 جنيه";
  });
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gov = document.getElementById("governorate").value;
  const city = document.getElementById("city").value.trim();
  const address = document.getElementById("address").value.trim();
  const product = document.getElementById("product").value;
  const payment = document.getElementById("payment").value;

  if (normalizePhone(phone).length < 10) {
    alert("من فضلك اكتب رقم هاتف صحيح.");
    return;
  }

  const message =
`طلب جديد من موقع REVON 🌿

الاسم: ${name}
رقم الهاتف: ${phone}
المحافظة: ${gov}
المدينة / المركز: ${city || "غير محدد"}
العنوان بالتفصيل: ${address}
المنتج: ${product}
طريقة الدفع: ${payment}

من فضلك أكد الطلب والتفاصيل.`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
});
