import React from 'react'
import { Page, Text, Image, Document, StyleSheet, View, Font } from '@react-pdf/renderer'
import schoolLogo from '../../images/sRecord.png'
import oswald from '../../Oswald/oswald.ttf'
Font.register({ family: 'oswald', src: oswald });
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    // title: {
    //     fontSize: 24,
    //     fontWeight: 900,
    //     textAlign: 'center',
    // },
    text: {
        maargin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
        border: '1px black solid',
        padding: 2
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'oswald',
        textAlign: 'center',
    },
    address: {
        fontSize: 8,
        textAlign: 'center',
        margin: 0,
    },
    title: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 0,
        padding: 5,
        width: 200,
    },
    titleView: {
        display: 'flex',
        height: 27,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    schoolImage: {
        width: 60,
    },
    name_Image: {
        display: 'flex',
        flexDirection: 'row'
    },
    label: {
        fontSize: 11,
        fontWeight: 100,
        color: 'rgb(100, 100, 100)',
    },
    labelValue: {
        color: 'black'
    },
    studentDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    reportAttWrap: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    reportAttribute: {
        fontSize: 12,
        textAlign: 'center',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: 0,
        padding: 5,
        width: '100%',
    },
    reportMarks: {
        display: 'flex',
        flexDirection: 'row',
    },
    reportMarksD: {
        fontSize: 12,
        textAlign: 'center',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        margin: 0,
        padding: 2,
        width: '100%',
    },
    aap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    hr: {
        marginTop: 5,
        fontSize: 11,
        fontWeight: 100,
        color: 'rgb(100, 100, 100)',
    }
})

const reportCardInfo = [
    {
        schoolName: 'KANO CAPITAL BOYS SECONDARY SCHOOL',
        image: schoolLogo,
        schoolAddress: 'OFF ALU AVENUE BEHIND REACE COURSE, P.O. BOX 1059, KANO',
        reportTitle: 'TERMINAL REPORT',
        studentName: 'Munir Ibrahim Hassan',
        studentClass: 'JSS 1',
        noInClass: '74',
        term: '1st Term',
        admissionNumber: 30
    },
]

const reportCardScore = [
    {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    },
    {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    }, {
        subject: 'English',
        ca: 10,
        exam: 60,
        total: 70,
        grade: 'A',
        TeachersRemark: 'Excellent',
        TeachersSignature: 'Seen'
    },
]

const classMasterReport = [
    {
        academicPerformance: 'Good result, keep it up.',
        moralBehabiours: 'Good.',
        sign: 'Seen',
    }
]
const principalReport = [
    {
        comment: 'Excellent performace.',
        sign: 'Great'
    }
]

const parent = [
    {
        parentSignature: 'Father',
        date: "Today's Date"
    }
]

const ReportCard = () => {
    return (
        <>
            <Document>
                <Page size='A4' style={styles.body}>
                    {/* <Image style={styles.image} src={item.image} />  */}
                    {reportCardInfo.map((item, index) => (
                        <View>

                            <View style={styles.name_Image}>
                                <View style={{ width: '20%', float: 'left' }}>
                                    <Image style={styles.schoolImage} src={item.image} />
                                </View>
                                <View style={{ width: '80%', float: 'left' }}>
                                    <Text style={styles.name} >{item.schoolName}</Text>
                                    <Text style={styles.address} >{item.schoolAddress}</Text>
                                    <View style={styles.titleView}>
                                        <Text style={styles.title} >{item.reportTitle}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.label}>
                                    Name:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.studentName}
                                    </Text>
                                </Text>
                            </View>
                            <View style={styles.studentDetails}>
                                <Text style={styles.label}>
                                    Class:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.studentClass}
                                    </Text>
                                </Text>
                                <Text style={styles.label}>
                                    Number in Class:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.noInClass}
                                    </Text>
                                </Text>
                            </View>
                            <View style={styles.studentDetails}>

                                <Text style={styles.label}>
                                    Report for:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.term}
                                    </Text>
                                </Text>
                                <Text style={styles.label}>
                                    Admission Number:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.admissionNumber}
                                    </Text>
                                </Text>
                            </View>
                        </View>

                    ))}

                    <View style={styles.reportAttWrap}>
                        <Text style={styles.reportAttribute}>Subject</Text>
                        <Text style={styles.reportAttribute}>C/A</Text>
                        <Text style={styles.reportAttribute}>Exam</Text>
                        <Text style={styles.reportAttribute}>Total</Text>
                        <Text style={styles.reportAttribute}>Grade</Text>
                        <Text style={styles.reportAttribute}>Teacher's Remark</Text>
                        <Text style={styles.reportAttribute}>Teacher's Signature</Text>
                    </View>
                    {reportCardScore.map((item, index) => (
                        <View style={styles.reportMarks}>
                            <Text style={styles.reportMarksD}>{item.subject}</Text>
                            <Text style={styles.reportMarksD}>{item.ca}</Text>
                            <Text style={styles.reportMarksD}>{item.exam}</Text>
                            <Text style={styles.reportMarksD}>{item.total}</Text>
                            <Text style={styles.reportMarksD}>{item.grade}</Text>
                            <Text style={styles.reportMarksD}>{item.TeachersRemark}</Text>
                            <Text style={styles.reportMarksD}>{item.TeachersSignature}</Text>
                        </View>
                    ))}

                    <View style={styles.aap}>
                        <Text style={styles.label}>
                            Aggregate:{' '}
                            <Text style={styles.labelValue}>
                                800
                            </Text>
                        </Text>
                        <Text style={styles.label}>
                            Average:{' '}
                            <Text style={styles.labelValue}>
                                59
                            </Text>
                        </Text>
                        <Text style={styles.label}>
                            Position in class:{' '}
                            <Text style={styles.labelValue}>
                                1st
                            </Text>
                        </Text>
                    </View>
                    <View style={{ border: 1, borderStyle: 'solid', borderColor: 'black', padding: 5, marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 12 }}>CLASS MASTER'S REPORT</Text>
                        {classMasterReport.map((item, index) => (
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.hr}>

                                    Academic Performance:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.academicPerformance}

                                    </Text>
                                </Text>
                                <Text style={styles.hr}>
                                    Moral Behaviours:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.moralBehabiours}
                                    </Text>
                                </Text>
                                <Text style={styles.hr}>
                                    Sign:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.sign}
                                    </Text>
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View style={{ border: 1, borderStyle: 'solid', borderColor: 'black', padding: 5, marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 12 }}>PRINCIPAL'S REPORT</Text>
                        {principalReport.map((item, index) => (
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.hr}>
                                    Comment:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.comment}
                                    </Text>
                                </Text>
                                <Text style={styles.hr}>
                                    Sign:{' '}
                                    <Text style={styles.labelValue}>
                                        {item.sign}
                                    </Text>
                                </Text>
                            </View>
                        ))}
                    </View>
                    {parent.map((item, index) => (

                        <View style={styles.studentDetails}>
                            <Text style={styles.label}>
                                Parent's Signature:{' '}
                                <Text style={styles.labelValue}>
                                    {item.parentSignature}
                                </Text>
                            </Text>
                            <Text style={styles.label}>
                                Date:{' '}
                                <Text style={styles.labelValue}>
                                    {item.date}
                                </Text>
                            </Text>
                        </View>
                    ))}
                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} fixed />
                </Page>
            </Document>
        </>
    )
}
export default ReportCard;  

