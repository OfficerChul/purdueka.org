export default  function Page({ params }: { params: { id: string } }) {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between mt-10">
                <div className='text-yellow-600 text-2xl'>공지사항</div>
                <div>
                    <input type="text" id="first_name" className="border border-black text-gray-900 text-sm block w-full p-2.5" placeholder="검색하세요." />
                </div>
            </div>
            <div className="p-2 mt-14">
                <div className="flex flex-col lg:flex-row justify-between">
                    <h1 className="text-4xl text-gold">2023년 기묘한 밤 이벤트 정보 안내 공고</h1>
                    <div className="flex items-end text-gold">
                        <div className="pe-2"><span className="text-yellow-600">작성자</span> PKA</div>
                        <div className="px-2"><span className="text-yellow-600">조회수</span> 30</div>
                        <div className="px-2"><span className="text-yellow-600">댓글</span> 2</div>
                        <div className="ps-2">2023.09.12 15:30</div>
                    </div>
                </div>
                <hr className="border border-stone-400 h-0 my-8" />
                <div>
                <p>안녕하세요 Purdue 한인학생 여러분, PKA 회장 임재형입니다. </p>
                <p>&nbsp;</p>
                <p>모두 즐거운 새학기를 보내고 계신지요?</p> 
                <p>&nbsp;</p>
                <p>저 또한 신입생환영회를 시작으로 임기를 시작한지 어느덧 2주일 지났습니다.</p> 
                <p>다만, 신입생환영회의 뒷풀이 시간이 짧아서 많은 이야기를 나누지 못했다는 점, 그리고 현재 학교를 다니고 있는 재학생들과의 교류가 부족하였다는 점을 피드백 삼아 이번에는 신입생과 재학생 모두가 참여가능한 기묘한밤 파티 를 주최하고자 하오니 여러분들의 많은 관심과 참여 부탁드립니다.</p> 
                <p>&nbsp;</p>
                <p>기묘한밤은 신입생들과 재학생들이 모여서 친목을 형성하는 자리로, 간단한 안주거리와 음류가 제공될 예정입니다. 술은 못마시는분 안마시는 분도 참여 가능합니다! 술에 대한 부담없이 즐기시다 가세요! (술은 21세 이상부터 마실수 있는점 알려드립니다!!)</p> 
                <p>&nbsp;</p>
                <p>&lt;기묘한밤 Party&gt;</p>
                <p> - 일시: 2023년 9월 23일 (토) 18:30 ~ 22:30</p>
                <p> - 장소: Lafayette Brewing Company (622 Main St, Lafayette, IN 47901)</p> 
                <p> - 참가비: $28/인</p> 
                <p>**인원제한: 130</p>
                <p>**신분증 필참**</p>  
                <p>&nbsp;</p>
                <p>참석 희망하는 인원 모두 모셔 최대한 많은 인원들끼리 교류할 수 있는 장을 만들어 여러분 모두에게 인사를 드리는 것이 마땅하나, 식당측의 18세 미만 출입이 어렵다는 점과 수용 가능한 인원의 제한으로 인하여 참석 가능한 인원을 선착순으로 받게 된다는 점, 대단히 죄송할 따름입니다.</p> 
                <p>&nbsp;</p>
                <p>기묘한밤 의 세부일정 및 참가신청 링크는 아래와 같습니다.</p> 
                <p>참가신청은 2023년 9월 15일(금) 오후 5시까지 또는 130명 정원마감 까지 받도록 하겠습니다. 참고해주시길 바랍니다.</p> 
                <p>&nbsp;</p>
                <p>&lt;Welcoming Night 참가신청 링크&gt;</p>
                <p>신청 마감: 2023년 9월 15일(금) 오후 5시 또는 130명 정원마감</p> 
                <p>Link:</p> 
                <a href="https://forms.gle/nfsMK59jYnzFMqbQA">https://forms.gle/nfsMK59jYnzFMqbQA</a> 
                <p>&nbsp;</p>
                <p>오시는 길 (PMU 기준): 버스: 1B & 4B</p>
                </div>
            </div>
        </div>
    )
}