/* action 작성 규칙
1.공통
  > 변수와 내용은 모두 대문자로 작성 부탁드립니다
  > 변수와 내용의 text를 동일하게 작성 부탁 드립니다
  > 스네이크 케이스 방식으로 작성 부탁 드립니다
  > action 목록은 알파벳 순으로 정렬 부탁 드립니다
  > front action과 server action을 분리해주시기 바랍니다.
  > export를 붙여주시기 바랍니다.
2.서버에 데이터 전송이 필요한 경우
  > 서버에 데이터 처리를 요청
    ㄴ export const AAA_AAAA_REQUEST = "AAA_AAAA_REQUEST"
  > 서버가 데이터 처리를 성공
    ㄴ export const AAA_AAAA_SUCCESS = "AAA_AAAA_SUCCESS"
  > 서버가 데이터 처리를 실패
    ㄴ export const AAA_AAAA_FAILURE = "AAA_AAAA_REQUEST"
3.프론트 내부에서만 사용되는 경우
  > 앞에다가 LOACL을 추가 부탁 드립니다
    ㄴ const LOCAL_POST_CLICK_REQUEST = "LOCAL_POST_CLICK_REQUEST";
  > 요청, 성공, 실패 중에서 필요한 action만 추가하시면 됩니다
    ㄴ export const LOCAL_POST_CLICK_REQUEST = "LOCAL_POST_CLICK_REQUEST";
    ㄴ export const LOCAL_POST_CLICK_SUCCESS = "LOCAL_POST_CLICK_SUCCESS";
    ㄴ FAILURE은 추가하지 않았습니다
*/

// 게시클 클릭
export const LOCAL_POST_CLICK_REQUEST = "LOCAL_POST_CLICK_REQUEST";
export const LOCAL_POST_CLICK_SUCCESS = "LOCAL_POST_CLICK_SUCCESS";

// 서버에 공지사항 데이터 LOAD
export const NOTICE_LOAD_REQUEST = "NOTICE_LOAD_REQUEST";
export const NOTICE_LOAD_SUCCESS = "NOTICE_LOAD_SUCCESS";
export const NOTICE_LOAD_FAILURE = "NOTICE_LOAD_REQUEST";

// 서버에 인기 태그 데이터 LOAD
export const POPULAR_TAGS_LOAD_REQUEST = "POPULAR_TAGS_LOAD_REQUEST";
export const POPULAR_TAGS_LOAD_SUCCESS = "POPULAR_TAGS_LOAD_SUCCESS";
export const POPULAR_TAGS_LOAD_FAILURE = "POPULAR_TAGS_LOAD_REQUEST";

// 서버에 게시글 데이터 LOAD
export const POSTS_LOAD_REQUEST = "POSTS_LOAD_REQUEST";
export const POSTS_LOAD_SUCCESS = "POSTS_LOAD_SUCCESS";
export const POSTS_LOAD_FAILURE = "POSTS_LOAD_REQUEST";
