import React from 'react'

const Content = () => {
    return (
        <main className='flex flex-col xl:flex-row mt-20 '>
            <section className='w-2/3 ml-20 xl:ml-32'>
                <div>
                    <p className='font-extrabold text-4xl'>Notes</p>
                    <p className='font-normal text-base text-neutral-700 mt-2'>In this episode,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='mt-5 font-normal text-base text-neutral-700'>
                    <p className='font-extrabold text-2xl text-black'>Topics</p>
                    <p className='mt-3'>&gt; <strong className='text-neutral-800'>1:12</strong> Helen&apos;s been on other podcasts: Startups for the Rest of Us, Indie Bites, Indie Worldwide</p>
                    <p>&gt; <strong className='text-neutral-800'>0:55</strong> Jason&apos;s first podcast ever</p>
                    <p>&gt; <strong className='text-neutral-800'>3:06</strong> Should we invest in the &quot;auto publish to YouTube&quot; feature?</p>
                    <p>&gt; <strong className='text-neutral-800'>13:32</strong> The best features the ones that feel like &quot;magic&quot; when a customer uses them</p>
                    <p>&gt; <strong className='text-neutral-800'>18:46</strong> The &quot;wait and see&quot; product development philosophy</p>
                    <p>&gt; <strong className='text-neutral-800'>20:27</strong> A new podcast website builder CMS and website designs</p>
                    <p>&gt; <strong className='text-neutral-800'>32:24</strong> Making a few new podcast website themes</p>
                    <p>&gt; <strong className='text-neutral-800'>34:30</strong> How we run our weekly team meetings</p>
                </div>
                <div className='mt-5 font-normal text-base text-neutral-700'>
                    <p className='font-extrabold text-2xl text-black'>Contributors</p>
                    <p className='mt-3'>— <strong className='text-neutral-900'>Jon Buda</strong> lives in London, UK. He&apos;s been involved in the podcasting world since 2013, and has been building software since 2002.
                        building software since 2002.</p>
                    <p>— <strong className='text-neutral-900'>Mark Mitchel</strong> lives in London, UK. He&apos;s been involved in the podcasting world since 2013, and has been</p>
                    <p>— <strong className='text-neutral-900'>Mary James</strong> lives in London, UK. He&apos;s been involved in the podcasting world since 2013, and has been building software since 2002.</p>
                </div>
                <div className='mt-5'>
                    <p>If you liked this episode, popularised in the with the release of letraset sheets containing passages, and more recently with desktop <strong className='text-neutral-900'> @PublishingSoftware</strong>.</p>
                </div>
            </section>
            <section className='ml-32 xl:ml-14 w-1/2 flex justify-center mt-10 xl:mt-0 xl:w-1/3 xl:h-60'>
              <img src="/Sidebar.png" alt="" />
            </section>
        </main>
    )
}

export default Content