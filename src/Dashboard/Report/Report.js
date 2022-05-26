import React from 'react'
import { Card } from 'reactstrap'
// import './report.css'
import report from '../../images/report.png'
export default function Report() {
    const tableHeading = [
        {
            name: 'name',
            subject1: 'English Language',
            subject2: 'Mathematics',
            subject3: 'Civic Education',
            subject4: 'Agricultural Studies',
            subject5: 'Computer Studies',
            subject6: 'Computer Studies',
            subject7: 'Computer Studies',
            subject8: 'Computer Studies',
            subject9: 'Computer Studies',
            subject10: 'Computer Studies',
            subject11: 'Computer Studies',
            subject12: 'Computer Studies'
        }
    ]
    const students = [
        {
            name: 'joe joeee',
            
        }
    ]
    return (
        <div>
            <Card className='report-card shadow py-3 px-4 mt-3'>
                <h3 className=''>
                    {/* <span>
                        <img src={report} alt='a' />
                    </span> */}
                    Reports
                </h3>
                <div className='t-d'>
                    <table className='report-t'>
                        {tableHeading.map((item, index) => (
                            <thead>
                                <tr>
                                    <th className='report-th'>#</th>
                                    <th className='report-th'>{item.name}</th>
                                    <th className='report-th'>{item.subject1}</th>
                                    <th className='report-th'>{item.subject2}</th>
                                    <th className='report-th'>{item.subject3}</th>
                                    <th className='report-th'>{item.subject4}</th>
                                    <th className='report-th'>{item.subject5}</th>
                                    <th className='report-th'>{item.subject6}</th>
                                    <th className='report-th'>{item.subject7}</th>
                                    <th className='report-th'>{item.subject8}</th>
                                    <th className='report-th'>{item.subject9}</th>
                                    <th className='report-th'>{item.subject10}</th>
                                    <th className='report-th'>{item.subject11}</th>
                                    <th className='report-th'>{item.subject12}</th>
                                </tr>
                            </thead>
                        ))}
                        {students.map((item, index) => (
                            <tbody>

                                <tr>
                                    <td className='report-td'>1</td>
                                    <td className='report-td'>{item.name}</td>
                                    <td className='report-td'>60</td>
                                    <td className='report-td'>50</td>
                                    <td className='report-td'>21</td>
                                    <td className='report-td'>44</td>
                                    <td className='report-td'>44</td>
                                    <td className='report-td'>90</td>
                                    <td className='report-td'>19</td>
                                    <td className='report-td'>33</td>
                                    <td className='report-td'>33</td>
                                    <td className='report-td'>22</td>
                                    <td className='report-td'>22</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                {/* <input type='text'/> */}
            </Card>
        </div>
    )
}
