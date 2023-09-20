export default function Footer(){
    return (
        <footer className="w-full mt-20">
          <div className="bg-yellow-600 p-8">
            <div className="flex bg-white w-full rounded-full p-1">
              <input type="email" placeholder="이메일 주소를 입력해주세요" className="w-full rounded-full focus:outline-none ps-8" />
              <button className="w-1/4 bg-black text-white p-4 rounded-full truncate">구독하기</button>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 mx-20 my-8">
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">PKA</a>
              <ul className="mt-6">
                <li className="leading-loose"><a href="#">한인회 임원</a></li>
                <li className="leading-loose"><a href="#">PKA 조직도</a></li>
                <li className="leading-loose"><a href="#">PKA 회장단 선출</a></li>
              </ul>
            </div>
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">퍼듀정보</a>
              <ul className="mt-6">
                <li className="leading-loose"><a href="#">신입생 정보</a></li>
                <li className="leading-loose"><a href="#">퍼듀 정착 가이드</a></li>
                <li className="leading-loose"><a href="#">PKA 메일링 리스트 구독하기</a></li>
                <li className="leading-loose"><a href="#">퍼듀 한인 동아리</a></li>
              </ul>
            </div>
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">채용 공고</a>
              <ul className="mt-6">
                <li className="leading-loose"><a href="#">공고</a></li>
              </ul>
            </div>
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">렌트/룸메</a>
              <ul className="mt-6">
                <li className="leading-loose"><a href="#">렌트/룸메</a></li>
                <li className="leading-loose"><a href="#">글쓰기</a></li>
              </ul>
            </div>
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">사고/팔고</a>
              <ul className="mt-6">
                <li className="leading-loose"><a href="#">사고/팔고</a></li>
                <li className="leading-loose"><a href="#">글쓰기</a></li>
              </ul>
            </div>
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">갤러리</a>
            </div>
            <div className="p-4 md:col-span-2">
              <a href="#" className="font-bold text-yellow-600">Contact</a>
              <ul className="mt-6">
                <li className="leading-loose"><a href="#">president@purdueka.org</a></li>
                <li className="leading-loose"><a href="#">president@purdueka.org</a></li>
                <li className="leading-loose"><a href="#">president@purdueka.org</a></li>
              </ul>
            </div>
            <div className="p-4">
              <a href="#" className="font-bold text-yellow-600">Follow us</a>
              <div>
              </div>
            </div>
          </div>
        </footer>
    )
}