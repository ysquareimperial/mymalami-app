import React from 'react'
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer'
import logooo from '../../images/sRecord-L&B.png'
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    text: {
        maargin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
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
    }
})
const ReportCard = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>Hello</Text>
                <Text style={styles.title} fixed>Hello title</Text>
                <Image style={styles.image} src={logooo} />
                <Text style={styles.text}>
                    The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India.
                    It has a muscular, broad-chested body, short, rounded head, round ears,
                    and a hairy tuft at the end of its tail. It is sexually dimorphic; adult
                    male lions are larger than females and have a prominent mane. It is a social
                    species, forming groups called prides. A lion's pride consists of a few adult males,
                    related females, and cubs. Groups of female lions usually hunt together, preying mostly on
                    large ungulates. The lion is an apex and keystone predator; although some lions scavenge when
                    opportunities occur and have been known to hunt humans, the species typically does not actively
                    seek out and prey on humans.
                    The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India.
                    It has a muscular, broad-chested body, short, rounded head, round ears,
                    and a hairy tuft at the end of its tail. It is sexually dimorphic; adult
                    male lions are larger than females and have a prominent mane. It is a social
                    species, forming groups called prides. A lion's pride consists of a few adult males,
                    related females, and cubs. Groups of female lions usually hunt together, preying mostly on
                    large ungulates. The lion is an apex and keystone predator; although some lions scavenge when
                    opportunities occur and have been known to hunt humans, the species typically does not actively
                    seek out and prey on humans.

                </Text>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} fixed />
            </Page>
        </Document>
    )
}
export default ReportCard;

