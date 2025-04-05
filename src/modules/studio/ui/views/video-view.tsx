interface VideoViewProps {
  videoId: string
}

import React from 'react'
import { FormSection } from '../sections/form-section'

export const VideoView = ({ videoId }: VideoViewProps) => {
  return (
    <div className='px-4 pt-2.5 max-w-screen-lg'>
      <FormSection videoId={videoId} />
    </div>
  )
}
