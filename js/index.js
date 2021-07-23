//تعريف متغير للفيديو
var vid = document.getElementById("video");

// دالة لتشغيل وإيقاف الفيديو
function playVid() {
    if(vid.paused){
        vid.play();
    } else {
        vid.pause();
    }
}

// دالة للتحقق من دخل المستخدم
(function () {

  // إحضار جميع النماذج التي نريد تطبيق التحقق منها
  var forms = document.querySelectorAll('.needs-validation')

  // الاستماع إلى أمر الإرسال والتأكد من الدخل وإضافة صنف التحقق في حال كان صحيحًا
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()