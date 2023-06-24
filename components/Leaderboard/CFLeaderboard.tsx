import prisma from '@/prisma/client'
import InfoTable from '@/components/Table/InfoTable'

// https://www.prisma.io/docs/concepts/components/prisma-client/pagination

interface Props {}

export default async function CFLeaderboard({}) {
  const cf_ppl = await prisma.codeforcesLeaderBoard.findMany({
    orderBy: {
      rating: 'desc',
    },
    select: {
      rollNumber: true,
      name: true,
      userHandle: true,
      rating: true,
      contests: true,
      last_contest_id: true,
    },
  })

  const headings: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Rating',
    'Contests',
    'Last Contest',
  ]
  const arr: string[][] = []
  cf_ppl.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })

  return (
    <>
      <InfoTable
        table_heading='Codeforces'
        headings={headings}
        row_data={arr}
      />
    </>
  )
}
