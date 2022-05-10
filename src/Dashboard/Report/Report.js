import React from 'react'
import { Card } from 'reactstrap'
// import './report.css'
import report from '../../images/report.png'
export default function Report() {
    return (
        <div>
            <Card className='report-card shadow py-3 px-4 mt-3'>
                <h3 className=''>
                    {/* <span>
                        <img src={report} alt='a' />
                    </span> */}
                    Reports
                </h3>
            </Card>
        </div>
    )
}
