// كود JavaScript المحدث
document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users[users.length - 1];

    if (currentUser) {
        // عرض البيانات الأساسية
        document.getElementById('userName').textContent = `${currentUser.firstname} ${currentUser.lasttname}`;
        document.getElementById('userEmail').textContent = currentUser.email;
        document.getElementById('userPhone').textContent = currentUser.telephone;

        // تفعيل تغيير الصورة
        const imageInput = document.getElementById('imageInput');
        const profileImage = document.getElementById('profileImage');

        imageInput.onchange = function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // تحديث الصورة في الصفحة
                    profileImage.src = e.target.result;
                    
                    // تحديث الصورة في localStorage
                    currentUser.profileImage = e.target.result;
                    users[users.length - 1] = currentUser;
                    localStorage.setItem("users", JSON.stringify(users));
                }
                reader.readAsDataURL(file);
            }
        }

        // عرض الصورة المحفوظة
        if (currentUser.profileImage) {
            profileImage.src = currentUser.profileImage;
        }
    }
});
