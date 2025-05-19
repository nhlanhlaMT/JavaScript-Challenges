// Challenge 9: Price Tier Selector
/*Given userType ("student", "regular", "vip") →
Return price: "$10", "$20", or "$30" respectively.*/

function givePriceByUserType(type) {
  return type === "student" ? "$10"
      :  type === "regular" ? "$20"
      :  type === "vip" ? "$30"
      : "Invalid User Type.";
}

console.log(givePriceByUserType("student"));
console.log(givePriceByUserType("regular"));
console.log(givePriceByUserType("vip"));
console.log(givePriceByUserType("guest"));

    // Challenge 10: Theme Toggle (Dark/Light Mode)
/*Input boolean isDarkMode →
Assign a CSS class name: "dark-theme" or "light-theme".*/

function colorTheme(isDarkMode) {
  return isDarkMode ? "dark-theme" : "light-theme";
}

console.log(colorTheme(true));
console.log(colorTheme(false));



// Challenge 11: Complex Score Logic
/*Given a test score (0–100), use ternaries to assign:
"A" (90+),
"B" (80–89),
"C" (70–79),
"D" (60–69),
"F" (below 60).*/

function testScore(score) {
  return score >= 90 ? "A"
       : score >= 80 ? "B"
       : score >= 70 ? "C"
       : score >= 60 ? "D"
       :               "F"
}

console.log(testScore(90));
console.log(testScore(80));
console.log(testScore(70));
console.log(testScore(60));
console.log(testScore(59));


// Challenge 12: Shipping Cost Logic
/*Input: isMember, cartValue
Output:
"Free Shipping" if member or cartValue > 500, else "R50 Shipping Fee".*/

function feeVerifier(isMember, cartValue) {
  return (isMember || cartValue > 500) ? "Free Shipping" : "R50 Shipping Fee"
}

console.log(feeVerifier(true, 501));
console.log(feeVerifier(false, 400));
console.log(feeVerifier(true, 600));

// Challenge 13: Responsive Layout Based on Device Width
/*Input: width (number)
Output class:
"mobile" if < 768,
"tablet" if < 1024,
"desktop" otherwise.*/

function width(number) {
  return number < 768 ? "mobile"
       : number < 1024 ? "tablet"
       :                 "desktop";
}

console.log(width(767));
console.log(width(1023));
console.log(width(1024));

// Challenge 14: App Notification Logic
/*Given:
  hasUnreadMessages
  isOnline
  Output:
  "🔔 New Messages" if both are true,
  "📴 Offline" if offline,
  "✅ All caught up" if online with no new messages.*/

function activityStatus(hasUnreadMessages, isOnline) {
  return hasUnreadMessages && isOnline ? "🔔 New Messages"
       : hasUnreadMessages && !isOnline ? "📴 Offline"
       : !hasUnreadMessages && isOnline ? "✅ All caught up"
       : "Not Active";
} 

console.log(activityStatus(true, true));
console.log(activityStatus(true, false));
console.log(activityStatus(false, true));
console.log(activityStatus(false, false));

// 🧠 Bonus Expert Challenge
/*Role-Based Dashboard Access (Chained Ternary Madness)
Input: role ("admin", "editor", "viewer", unknown)
Output:

"Full Access" if admin

"Edit Access" if editor

"View Only" if viewer

"No Access" for anything else*/

function dashboardAccess(role) {
  const roleType = role.toLowerCase();

  return roleType === "admin" ? "Full Access"
       : roleType === "editor" ? "Edit Access"
       : roleType === "viewer" ? "View Only"
       : "No Access";
}

console.log(dashboardAccess("admin"));
console.log(dashboardAccess("editor"));
console.log(dashboardAccess("viewer"));
console.log(dashboardAccess("unknown"));