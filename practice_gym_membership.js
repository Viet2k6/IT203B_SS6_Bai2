let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;

let daDangKy = false;
let memberName = "";
let packageType = "";
let months = 0;
let ptSessions = 0;

let choice;
const currentYear = new Date().getFullYear();

do {
  let menu = `=== QUẢN LÝ GYM ===
1. Đăng ký hội viên mới
2. Tính tiền và giảm giá
3. Quét thẻ check-in
4. Báo cáo và thoát
Chọn chức năng: `;

  choice = Number(prompt(menu));
  switch (choice) {
    case 1:
      memberName = prompt("Nhập tên hội viên:").trim();
      packageType = prompt("Nhập gói tập (STANDARD hoặc VIP):").trim().toUpperCase();
      months = Number(prompt("Nhập số tháng:"));
      ptSessions = Number(prompt("Nhập số buổi PT:"));

      daDangKy = true;
      registeredMembers++;

      console.log(`Đăng ký thành công cho: ${memberName}`);
      break;

    case 2:
      if (daDangKy === false) {
        console.log("Bạn chưa đăng ký thông tin hội viên.");
        break;
      }

      let baseFee = 0;
      if (packageType === "STANDARD") {
        baseFee = 500000;
      } else if (packageType === "VIP") {
        baseFee = 800000;
      } else {
        console.log("Gói không hợp lệ.");
        baseFee = 500000;
      }
    
      let membershipFee = baseFee * months;
      let ptFee = 300000 * ptSessions;
      let discountRate = 0;
      if (months >= 12) {
        discountRate = 0.25;
      } else if (months >= 6) {
        discountRate = 0.15;
      }

      let discountAmount = membershipFee * discountRate;
      let finalPayment = membershipFee - discountAmount + ptFee;
      totalRevenue = totalRevenue + finalPayment;
      daDangKy = false;

      console.log("--- HÓA ĐƠN ---");
      console.log(`Tên: ${memberName}`);
      console.log(`Tiền gói tập: ${membershipFee} VNĐ`);
      console.log(`Tiền PT: ${ptFee} VNĐ`);
      console.log(`Tiền được giảm: ${discountAmount} VNĐ`);
      console.log(`Tổng thanh toán: ${finalPayment} VNĐ`);
      console.log("---------------");
      break;

    case 3:
      let cardCode = prompt("Nhập mã thẻ:").trim().toUpperCase();
      if (
        cardCode.startsWith("GYM-") && cardCode.endsWith(currentYear.toString())) {
        console.log("Check-in thành công!");
        checkInCount++;
      } else {
        console.log("Mã thẻ không hợp lệ hoặc sai năm.");
      }
      break;

    case 4:
      console.log("--- BÁO CÁO CUỐI NGÀY ---");
      console.log(`Số hội viên mới: ${registeredMembers}`);
      console.log(`Số lượt khách check-in: ${checkInCount}`);
      console.log(`Tổng doanh thu: ${totalRevenue} VNĐ`);
      break;

    default:
      console.log("Lựa chọn không hợp lệ.");
      break;
  }
} while (choice !== 4);
