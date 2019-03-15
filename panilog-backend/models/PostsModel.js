var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 몽구스를 사용해서 키값을 고정하고 모델별로 구분하여 벨리데이션 체크를 함
// 몽구스 Auto increment 즉 문서가 저장될때마다 스키마의 ID필드를 자동증가
var { autoIncrement } = require('mongoose-plugin-autoinc');

//생성될 필드명을 정한다.
var PostsSchema = new Schema({
    //기존
    // name :String,
    
    //추가 + 모델에서 벨리데이션체크를 실시한다 -> 제목을 입력해주세요
    subject : {
        type : String, //제품명
        required : [ true, '제목은 입력해주세요']
    },
    thumbnail : String, //이미지 파일명 [이미지파일업로드]
    description : String, //설명
    created_at : { //작성일
        type : Date,
        default : Date.now()
    },
    username : String // 작성자추가(7차시)
});


// virtual 변수는 호출되면 실행하는 함수
// Object create 의 get과 set과 비슷함함
// set은 변수의 값을 바꾸거나 셋팅하면 호출
// get은 getDate변수를 호출하는 순간 날짜 월일이 찍힌다.
// 최대한 모델안에서 많이 넣었음 -> ejs에서 넣을수도있지만 왠만하면 모델안에서
PostsSchema.virtual('getDate').get(function(){
    var date = new Date(this.created_at);
    return {
        year : date.getFullYear(),
        month : date.getMonth()+1,
        day : date.getDate()
    };
});


// 1씩 증가하는 primary Key를 만든다
// model : 생성할 document 이름
// field : primary key , startAt : 1부터 시작
PostsSchema.plugin( autoIncrement , { model : 'posts' , field : 'id' , startAt : 1 });
module.exports = mongoose.model('posts', PostsSchema);
 




