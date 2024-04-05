//tìm kiếm
function search() {
    var input = document.querySelector('.header__search-input').value.trim().toLowerCase()
    if (input == '') {
        alert("Vui lòng nhập thông tin tìm kiếm!!!")
        return false;
    } else {
        window.location.href = "timkiem.html?search=" + encodeURIComponent(input)
    }
    return false
}
// Form Validation register
function signup(event) {
    event.preventDefault();

    // Retrieve input values
    var emaildk = document.getElementById('email-dk').value;
    var tkdk = document.getElementById('tk-dk').value;
    var mkdk = document.getElementById('mk-dk').value;
    var mkdk2 = document.getElementById('mk-dk2').value;
    var hotendk = document.getElementById('hoten-dk').value;
    var gtdk = document.getElementById('gt-dk').value;
    var sdtdk = document.getElementById('sdt-dk').value;
    var diachidk = document.getElementById('diachi-dk').value;

    if (tkdk === "" || mkdk === "" || mkdk2 === "" || emaildk === "" || gtdk === "" || sdtdk === "") {
        alert("Vui lòng điền đầy đủ thông tin tài khoản, mật khẩu, email, giới tính và số điện thoại.");
        return;
    }
    if (mkdk !== mkdk2) {
        alert("Mật khẩu không khớp. Vui lòng nhập lại.");
        return;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emaildk)) {
        alert("Email không hợp lệ. Vui lòng nhập lại.");
        return;
    }


    if (gtdk == "Giới tính") {
        alert("Vui lòng chọn giới tính.");
        return;
    }


    var phoneNumberRegex = /^0\d{9}$/;
    if (!phoneNumberRegex.test(sdtdk)) {
        alert("Số điện thoại không hợp lệ. Phải bắt đầu từ số 0 và có độ dài là 10 số.");
        return;
    }


    if (mkdk.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 kí tự.");
        return;
    }

    var userdk = {
        emaildk: emaildk,
        tkdk: tkdk,
        mkdk: mkdk,
        hotendk: hotendk,
        gtdk: gtdk,
        sdtdk: sdtdk,
        diachidk: diachidk,
    };

    var json = JSON.stringify(userdk);
    localStorage.setItem(tkdk, json);

    alert("Đăng ký thành công!");
}



function login(event) {
    event.preventDefault();

    // Retrieve input values
    var tkdk = document.getElementById('tk').value;
    var mkdk = document.getElementById('mk').value;

    // Retrieve user data from local storage
    var userdk = localStorage.getItem(tkdk);

    if (userdk === null) {
        alert('Tài khoản không tồn tại. Vui lòng đăng ký.');
    } else {
        var data = JSON.parse(userdk);

        // Check if entered credentials match stored data
        if (tkdk === data.tkdk && mkdk === data.mkdk) {
            alert('Đăng nhập thành công');
            window.location.href = 'trangchu.html'; // Use assignment operator '=' instead of function call '()'
        } else {
            alert('Đăng nhập thất bại');
        }
    }
}
// Contact-Validation
function contact() {
    var email = document.getElementById("email");
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.value == 0) {
        alert('Vui lòng nhập email của bạn!');
        return false;
    }

    if (emailReg.test(email.value) == false) {
        alert('Vui lòng nhập email chính xác!');
        return false;
    }

    var fullName = document.getElementById('fullname');

    if (fullName.value == 0) {
        alert('Vui lòng nhập họ tên của bạn');
        return false;
    }

    if (fullName.value.length < 4) {
        alert('Vui lòng nhập lại họ và tên của bạn');
        return false;
    }

    var address = document.getElementById('address');

    if (address.value == 0) {
        alert('Vui lòng nhập địa chỉ của bạn');
        return false;
    }

    var sex = document.getElementById('sex');

    if (sex.value == 0) {
        alert('Vui lòng nhập giới tính của bạn');
        return false;
    }

    var city = document.getElementById('get-ct');

    if (city.value == 0) {
        alert('Vui lòng nhập thành phố');
        return false;
    }

    var gtlist = document.getElementById('get-list');

    if (gtlist.value == 0) {
        alert('Vui lòng nhập danh mục');
        return false;
    }

    var numberPhone = document.getElementById('numberPhone');
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!numberPhone.match(phoneno)) {
        alert('Vui lòng nhập số điện thoại của bạn');
        return false;
    }

    var textarea = document.getElementById('contentContact');

    if (textarea.value.length < 10) {
        alert('Vui lòng nhập nội dung góp ý!');
        return false;
    }

    alert('Trân thành cảm ơn về góp ý của bạn =))');
    return true;

}

// Sản phẩm - giỏ hàng
let cart = [];
const btn = document.querySelectorAll("body button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("span").innerText
        var productPrice = product.querySelector(".Price").innerText
        addToCart(productImg,productName,productPrice);
        alert('Đã thêm '+productName+' vào giỏ hàng ')
    })

})




function addToCart(productImg,productName, productPrice) {
    const product = {
        img: productImg,
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    // Lưu giỏ hàng vào localStorage để duy trì dữ liệu khi reload trang
    localStorage.setItem('cart', JSON.stringify(cart));
}



document.addEventListener("DOMContentLoaded", function () {
    const cartTable = document.getElementById('cart');
    const cartItems = JSON.parse(localStorage.getItem('cart'));


    if (cartItems) {
        cartItems.forEach((item, index) => {
            // const row = cartTable.getElementsByTagName('tbody')[0].insertRow();
            // const sttCell = row.insertCell(0);
            // const imageCell = row.insertCell(1);
            // const priceCell = row.insertCell(2);
            // const quantityCell = row.insertCell(3);
            // const deleteCell = row.insertCell(4);
            // sttCell.textContent = index + 1;
            // imageCell.innerHTML = `<img src="${item.img}" style="width:200px;"> <span>${item.name}</span>`;
            // priceCell.textContent = `${item.price}`;
            // quantityCell.textContent = item.quantity;
            // deleteCell.innerHTML = `<button class="btn btn-sm btn-secondary" onclick="removeFromCart(${index})">Xóa</button>`;
            var addtr = document.createElement("tr")
            var trcontent = '<tr class=""><td class="p-2">'+(index+1)+'</td><td><img src="'+item.img+'" style="width: 200px;">'+item.name+'</td><td ><p><span>'+item.price+'</span>.000.000<sup>đ</sup></p> </td><td class="sl">'+item.quantity+'</td><td><button class="btn btn-sm btn-secondary" onclick="removeFromCart('+index+')">Xoá</button></td></tr>'
            addtr.innerHTML = trcontent
            var cartable = document.querySelector("tbody")
            cartable.append(addtr)
            
        });
    }
    carttotal()
    
});

function carttotal(){
    var cartitems = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartitems.length;i++){
        var inputValue = cartitems[i].querySelector(".sl").innerHTML
        // console.log(inputValue)
        var productPrice = cartitems[i].querySelector("span").innerHTML
        //console.log(productPrice)
        totalA = (inputValue*productPrice*1000000)
        // console.log(totalA)
        totalC = totalC + totalA
        totalD = totalC.toLocaleString('de-DE')
    }
    

    var toltalItems = document.querySelector(".total-price")
    toltalItems.innerHTML = totalD +'<sup>đ</sup>'
    var sent = document.querySelector("#Sent")
    sent.innerHTML = '<button class="btn btn-sm btn-danger w-50">Chốt đơn</button>'
    
    
}
function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload(); // Refresh trang để cập nhật giỏ hàng
}


