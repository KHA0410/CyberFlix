import React from 'react'
import ListMovie from './ListMovie'
import TheatersTab from './TheatersTab/TheatersTab'
import CarouselMovie from './CarouselMovie'

export default function HomePage() {
  return (
    <>
      <CarouselMovie/>
      <ListMovie />
      <TheatersTab />
    </>
  )
}
