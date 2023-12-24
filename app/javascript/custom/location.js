// ボタンを押した時の処理
document.getElementById("location-btn").onclick = function(){
    // 位置情報を取得する
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

// 取得に成功した場合の処理
function successCallback(position){
    // 緯度を取得
    var latitude = position.coords.latitude;

    // 経度を取得
    var longitude = position.coords.longitude;

    document.getElementById('lat').value = latitude;
    document.getElementById('lng').value = longitude;
    document.getElementById('location-btn').innerHTML = "取得しました";
};

// 取得に失敗した場合の処理
function errorCallback(){
    alert("位置情報が取得できませんでした");
};
