import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Box } from '@material-ui/core'
import ChatInput from '../components/ChatInput'


const BrandVoicePage = () => {

    const [brandVoicePrompt, setBrandVoicePrompt] = useState('')

  return (
    <Layout>
        <Box style={{ marginTop: '1rem'}}>
           <b>Add Brand voice</b>
           <div>
               Write or paste content that reflects your brand voice. 
               For best results, we recommend between 50-500 words.
            </div>
             <ChatInput
                   state={brandVoicePrompt} 
                   setState={setBrandVoicePrompt} 
                   messageForPlaceholder={'Add a blog article, social media posts, company mission, website copy, or any content that matches your brand voice.'} 
                   showButton={true}
                   buttonLabel={'Analyze Brand Voice'}
              />
        </Box>
    </Layout>
  )
}

export default BrandVoicePage
