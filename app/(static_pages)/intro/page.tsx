'use client'

import Image from 'next/image'
import { pka_member_data } from '../../_shared/member/pka_member'
import Profile_Card from '../../_components/profile_card/profile_card'


export default function Intro() {
    type Member = {
        name: string,
        name_us: string,
        major: string,
        email: string,
        role: string,
        role_us: string,
        image: string,
        team: string
    }
    let presidential: Member[] = [], event: Member[] = [], treasurer: Member[] = [], web: Member[] = [], recruiting: Member[] = [], outsourcing: Member[] = [];
    for (let i = 0; i < pka_member_data.length; i++) {
        if (pka_member_data[i].team == "presidential") {
            presidential.push(pka_member_data[i]);
        }
        else if (pka_member_data[i].team == "event") {
            event.push(pka_member_data[i]);
        }
        else if (pka_member_data[i].team == "treasurer") {
            treasurer.push(pka_member_data[i]);
        }
        else if (pka_member_data[i].team == "web") {
            web.push(pka_member_data[i]);
        }
        else if (pka_member_data[i].team == "recruiting") {
            recruiting.push(pka_member_data[i]);
        }
        else if (pka_member_data[i].team == "outsourcing") {
            outsourcing.push(pka_member_data[i]);
        }
    }

    return <div className="container m-auto my-8 mt-32">
        <h1 className='text-4xl'>PKA 한인회 임원</h1><br />

        <h1 className='my-8 text-3xl'>PKA 조직도</h1>
        <Image className='' alt='organizational_chart' src='/organizational_chart.bmp' width='0' height='0' layout='responsive'></Image>

        <hr />
        <h1 className='my-8 text-3xl'>PKA 임원</h1>

        <h1 className='my-8 text-2xl'>회장단</h1>
        <div className="flex flex-wrap">{presidential.map((e, index) => <Profile_Card key={index} name={e.name} name_us={e.name_us} major={e.major} email={e.email} image={e.image} role_us={e.role_us} />)}</div>

        <h1 className='my-8 text-2xl'>웹/미디어 팀</h1>
        <div className="flex flex-wrap">{web.map((e, index) => <Profile_Card key={index} name={e.name} name_us={e.name_us} major={e.major} email={e.email} image={e.image} role_us={e.role_us} />)}</div>

        <h1 className='my-8 text-2xl'>리크루팅 팀</h1>
        <div className="flex flex-wrap">{recruiting.map((e, index) => <Profile_Card key={index} name={e.name} name_us={e.name_us} major={e.major} email={e.email} image={e.image} role_us={e.role_us} />)}</div>

        <h1 className='my-8 text-2xl'>회계 팀</h1>
        <div className="flex flex-wrap">{treasurer.map((e, index) => <Profile_Card key={index} name={e.name} name_us={e.name_us} major={e.major} email={e.email} image={e.image} role_us={e.role_us} />)}</div>

        <h1 className='my-8 text-2xl'>이벤트 팀</h1>
        <div className="flex flex-wrap">{event.map((e, index) => <Profile_Card key={index} name={e.name} name_us={e.name_us} major={e.major} email={e.email} image={e.image} role_us={e.role_us} />)}</div>

        <h1 className='my-8 text-2xl'>대외협력 팀</h1>
        <div className="flex flex-wrap">{outsourcing.map((e, index) => <Profile_Card key={index} name={e.name} name_us={e.name_us} major={e.major} email={e.email} image={e.image} role_us={e.role_us} />)}</div>
        


        
    </div>

}