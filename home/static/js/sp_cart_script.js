const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const productEles = $$('.product')
const cartEle = $('#cart')

productEles.forEach(ele => {
    let currentQuantity = parseInt(ele.querySelector('.qt').innerText) // số lượng sản phậm hiện tại

    const removeBtn = ele.querySelector('.remove')

    // cái này thực ra là xóa khỏi giao diện thôi, cái đống html của nó vẫn còn, mà Huy đang lấy dữ liệu từ
    // giao diện nên khó xử lí, khi nhấn cái này thì xóa khỏi database luôn, rồi lúc tính tổng tiền lại thì lấy 
    // dữ liệu từ database
    removeBtn.onclick = () => {
        ele.classList.add('removed')
        // xóa sản phẩm đó trong giỏ hàng ở dtbase

        // if (check số sản phẩm trong giỏ hàng ở database, nếu nó bằng 0 thì thêm dòng này)
        //     cartEle.innerHTML = `<h1 class="no-product">Hiện không có quyển sách nào trong giỏ hàng !!</h1>`

        // bước này là t lấy dữ liệu từ giao diện để tính nè, nếu m lấy từ dtbase thì xóa dòng này đi
        ele.querySelector('.full-price').innerText = 0
        changeTotal()
    }

    // tăng số lượng sản phẩm
    ele.querySelector('.qt-plus').onclick = () => {
        // tăng số sp lên 1 rồi hiển thị ra giao diện
        currentQuantity += 1
        ele.querySelector('.qt').innerText = currentQuantity

        // animation của tổng số tiền sản phẩm đó
        ele.querySelector('.full-price').classList.add('added')
        setTimeout(() => {
            ele.querySelector('.full-price').classList.remove('added')
        }, 150);

        // không cho đặt quá số sản phẩm hiện có trong kho
        // if (currentQuantity > _____) {
        //     alert('Bạn đã đạt tối đa số sản phẩm trong kho !!')
        //     currentQuantity -= 1
        //     ele.querySelector('.qt').innerText = currentQuantity
        // }

        changeVal(ele)
    }

    // giảm số lượng sản phẩm
    ele.querySelector('.qt-minus').onclick = () => {
        // giảm số sp xuống 1 rồi hiển thị ra giao diện
        currentQuantity -= 1
        ele.querySelector('.qt').innerText = currentQuantity

        // animation của tổng số tiền sản phẩm đó
        ele.querySelector('.full-price').classList.add('added')
        setTimeout(() => {
            ele.querySelector('.full-price').classList.remove('added')
        }, 150);

        // xóa nếu số sản phẩm = 0
        if (currentQuantity == 0) {
            ele.classList.add('removed')
            // thay đổi giá trị trong database

            // if (check số sản phẩm trong giỏ hàng ở database, nếu nó bằng 0 thì thêm dòng này)
            //     cartEle.innerHTML = `<h1 class="no-product">Hiện không có quyển sách nào trong giỏ hàng !!</h1>`
        }

        changeVal(ele)
    }
})

// tính tiền tổng của từng loại sản phẩm, rồi cập nhật lại tổng tiền cần trả
function changeVal(ele) {
    let quantity = parseInt(ele.querySelector('.qt').innerText)
    let price = parseInt(ele.querySelector('.price').innerText)
    let res = quantity * price

    ele.querySelector('.full-price').innerText = res.toString() + ' 000 VND'

    changeTotal();
}

// thay đổi tổng tiền phải trả
function changeTotal() {
    let price = 0;

    // tính tổng số tiền ở của từng loại sản phẩm
    productEles.forEach(ele => price += parseInt(ele.querySelector('.full-price').innerText))

    // vì tiền viện là đơn vị ngàn
    price *= 1000
    let shipping = parseInt($('.shipping').innerText)
    let fullPrice = price + shipping

    // nếu không có sản phẩm nào thì không tính tiền phí ship vào, tổng là 0
    if (price == 0) {
        fullPrice = 0
        shipping = 0

        $('.shipping').innerText = 'Phí Ship: ' + shipping.toString()
    }

    $('.subtotal').innerText = 'Thành tiền: ' + price.toString() + ' VND'
    $('.total').innerText = 'Tổng tiền: ' + fullPrice.toString() + ' VND'
}