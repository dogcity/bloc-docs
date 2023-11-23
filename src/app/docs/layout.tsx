import Main from '@/components/Main'

const DocsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='w-screen flex flex-col mt-12 lg:flex-row lg:mt-20'>
      <main className='w-full lg:w-60 lg:border-r border-gray-500 border-b lg:border-b-0'>
        <Main />
      </main>
      <section className='w-full'>
        {children}
      </section>
    </div>
  )
}

export default DocsLayout
