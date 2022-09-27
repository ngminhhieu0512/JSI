// Khởi tạo danh sách sản phẩm
const initProducts = [
    {
        name: "SP1",
        price: "1000",
    },
    {
        name: "SP2",
        price: "1000",
    },
    {
        name: "SP3",
        price: "1000",
    },
];

/**
 * Kiểm tra localStorage
 *  - Kiểm tra xem trong localStorage đã có danh sách sản phẩm hay chưa
 *  - Nếu chưa thì lưu vào localStorage
 */
const productsFromLS = localStorage.getItem("products");
if (productsFromLS === null) {
    localStorage.setItem("products", JSON.stringify(initProducts));
}