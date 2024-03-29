import React from 'react'
import moment from 'moment-timezone'
import './App.css'

moment.suppressDeprecationWarnings = true

const PLACE_HOLDER = '---'

function replaceNonDigitString(string) {
  return string.replace(/[^\d]/g, '')
}

function epochToISO(epoch) {
  const value = typeof epoch === 'string' ? Number(epoch) : epoch
  try {
    return new Date(value).toISOString()
  } catch (_) {
    return PLACE_HOLDER
  }
}

function epochToLocal(epoch) {
  const value = typeof epoch === 'string' ? Number(epoch) : epoch
  try {
    return moment(value).tz(moment.tz.guess()).format()
  } catch (_) {
    return PLACE_HOLDER
  }
}

function localIsoToIso(localIsoDate) {
  try {
    return new Date(localIsoDate).toISOString()
  } catch (_) {
    return PLACE_HOLDER
  }
}

function localIsoToEpoch(localIsoDate) {
  try {
    return new Date(localIsoDate).getTime() || PLACE_HOLDER
  } catch (_) {
    return PLACE_HOLDER
  }
}

function isoDateToEpoch(isoDate) {
  try {
    return new Date(isoDate).getTime() || PLACE_HOLDER
  } catch (_) {
    return PLACE_HOLDER
  }
}

function isoDateToLocalDateString(isoDate) {
  if (moment(isoDate).isValid()) {
    return moment(isoDate).format('YYYY-MM-DD, hh:mm:ss A') + ' (Local Time)'
  } else {
    return PLACE_HOLDER
  }
}

function isoDateToTimezone(isoDate, timezoneString) {
  if (moment(isoDate).isValid()) {
    return (
      moment(isoDate).tz(timezoneString).format('YYYY-MM-DD, hh:mm:ss A') +
      ` (${timezoneString})`
    )
  } else {
    return PLACE_HOLDER
  }
}

function App() {
  const [epochInput, setEpochInput] = React.useState(Date.now())
  const [isoDateInput, setIsoDateInput] = React.useState(epochToISO(epochInput))
  const [localIsoDateInput, setLocalIsoDateInput] = React.useState(
    epochToLocal(epochInput)
  )

  const localTimeString = isoDateToLocalDateString(isoDateInput)
  const pacificTimeString = isoDateToTimezone(
    isoDateInput,
    'America/Los_Angeles'
  )
  const mountainTimeString = isoDateToTimezone(isoDateInput, 'America/Denver')
  const centralTimeString = isoDateToTimezone(isoDateInput, 'America/Chicago')
  const easternTimeString = isoDateToTimezone(isoDateInput, 'America/New_York')
  const utcTimeString = isoDateToTimezone(isoDateInput, 'Etc/UTC', '(UTC)')
  const nepalTimeString = isoDateToTimezone(isoDateInput, 'Asia/Kathmandu')
  const hawaiiTimeString = isoDateToTimezone(isoDateInput, 'US/Hawaii')

  const handleEpochChange = (event) => {
    const epoch = replaceNonDigitString(event.target.value)
    setEpochInput(epoch)
    setIsoDateInput(epochToISO(epoch))
    setLocalIsoDateInput(epochToLocal(epoch))
  }

  const handleIsoDateChange = (event) => {
    const isoDate = event.target.value
    setIsoDateInput(isoDate)
    setEpochInput(isoDateToEpoch(isoDate))
    setLocalIsoDateInput(epochToLocal(isoDateToEpoch(isoDate)))
  }

  const handleLocalDateChange = (event) => {
    const localIsoDate = event.target.value
    setLocalIsoDateInput(localIsoDate)
    setIsoDateInput(localIsoToIso(localIsoDate))
    setEpochInput(localIsoToEpoch(localIsoDate))
  }

  const handleSetCurrentTime = () => {
    const epoch = Date.now()
    setEpochInput(epoch)
    setIsoDateInput(epochToISO(epoch))
    setLocalIsoDateInput(epochToLocal(epoch))
  }

  return (
    <div className="App">
      <div className="center-div">
        <div className="title">Time Translator</div>
        <button
          className="set-button"
          type="button"
          onClick={handleSetCurrentTime}
        >
          Set to current time
        </button>
        {/* Epoch */}
        <label htmlFor="epoch-input">UNIX Epoch time in milliseconds</label>
        <input
          className="epoch-input"
          id="epoch-input"
          autoFocus
          type="text"
          value={epochInput}
          onChange={handleEpochChange}
        ></input>
        {/* ISO Date */}
        <label htmlFor="iso-input">ISO 8601</label>
        <input
          className="iso-input"
          id="iso-input"
          autoFocus
          type="text"
          value={isoDateInput}
          onChange={handleIsoDateChange}
        ></input>
        {/* Local ISO Date */}
        <label htmlFor="iso-input">Local ISO 8601</label>
        <input
          className="iso-input"
          id="iso-input"
          autoFocus
          type="text"
          value={localIsoDateInput}
          onChange={handleLocalDateChange}
        ></input>
        <div className="human-readable-time">{localTimeString}</div>
        <div className="human-readable-time">{pacificTimeString}</div>
        <div className="human-readable-time">{mountainTimeString}</div>
        <div className="human-readable-time">{centralTimeString}</div>
        <div className="human-readable-time">{easternTimeString}</div>
        <div className="human-readable-time">{utcTimeString}</div>
        <div className="human-readable-time">{nepalTimeString}</div>
        <div className="human-readable-time">{hawaiiTimeString}</div>
      </div>
    </div>
  )
}

export default App
