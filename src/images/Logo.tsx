import React from 'react'
import styled from 'styled-components'

export default function Logo(): JSX.Element {
  return (
    <LogoContainer>
      <svg
        width="155"
        height="49"
        viewBox="0 0 155 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="text"
          d="M32.809 48.28C27.3477 48.28 24.361 44.3973 23.849 36.632H12.841C11.9877 38.5947 11.2623 40.4293 10.665 42.136L9.001 47H0.0409999L20.201 4.76H33.961L36.649 35.864C37.0757 40.344 38.1423 43.2453 39.849 44.568C38.6117 47.0427 36.265 48.28 32.809 48.28ZM14.825 31.96H23.657L22.889 15.512V13.784L18.345 23.832L14.825 31.96ZM58.884 43.48C57.5613 46.68 54.788 48.28 50.564 48.28C48.4307 48.28 46.6813 47.5333 45.316 46.04C44.2067 44.8027 43.652 43.48 43.652 42.072C43.652 38.872 44.3987 33.7733 45.892 26.776L50.564 2.2L63.556 0.919998L57.348 33.304C56.6227 36.4613 56.26 38.5947 56.26 39.704C56.26 42.136 57.1347 43.3947 58.884 43.48ZM79.698 43.48C78.3753 46.68 75.602 48.28 71.378 48.28C69.202 48.28 67.4313 47.5333 66.066 46.04C64.914 44.7173 64.338 43.3947 64.338 42.072C64.338 38.616 65.1273 33.5173 66.706 26.776L69.074 14.36L82.066 13.08L78.162 33.304C77.4367 36.4613 77.074 38.5947 77.074 39.704C77.074 42.136 77.9487 43.3947 79.698 43.48ZM70.226 5.464C70.226 3.8 70.9087 2.52 72.274 1.624C73.682 0.727998 75.3887 0.279999 77.394 0.279999C79.3993 0.279999 80.9993 0.727998 82.194 1.624C83.4313 2.52 84.05 3.8 84.05 5.464C84.05 7.128 83.3673 8.38667 82.002 9.24C80.6793 10.0933 79.0153 10.52 77.01 10.52C75.0047 10.52 73.362 10.0933 72.082 9.24C70.8447 8.38667 70.226 7.128 70.226 5.464ZM87.9025 45.08C86.9212 43.9707 86.1958 42.5413 85.7265 40.792C85.2998 39.0427 85.0865 36.7387 85.0865 33.88C85.0865 31.0213 85.5772 28.2907 86.5585 25.688C87.5398 23.0853 88.9265 20.8453 90.7185 18.968C94.3878 15.0427 99.2518 13.08 105.311 13.08C107.487 13.08 109.364 13.4427 110.943 14.168L121.887 13.08L117.151 38.04C117.023 38.552 116.958 39.2773 116.958 40.216C116.958 41.1547 117.236 41.9227 117.791 42.52C118.388 43.1173 119.113 43.4587 119.967 43.544C119.54 44.9947 118.537 46.1467 116.958 47C115.423 47.8533 113.78 48.28 112.031 48.28C110.281 48.28 108.809 47.9387 107.615 47.256C106.463 46.616 105.716 45.7413 105.375 44.632C104.692 45.6987 103.625 46.5733 102.175 47.256C100.724 47.9387 99.0172 48.28 97.0545 48.28C95.1345 48.28 93.3852 48.024 91.8065 47.512C90.2278 47 88.9265 46.1893 87.9025 45.08ZM101.407 19.096C100.937 19.864 100.489 20.9093 100.062 22.232C99.6358 23.512 99.0598 25.9013 98.3345 29.4C97.6518 32.856 97.3105 35.8213 97.3105 38.296C97.3105 40.7707 97.5025 42.3707 97.8865 43.096C98.2705 43.8213 98.8038 44.184 99.4865 44.184C100.852 44.184 102.025 43.544 103.007 42.264C104.031 40.9413 104.735 39.128 105.119 36.824L108.511 18.072C107.615 17.304 106.633 16.92 105.567 16.92C104.543 16.92 103.711 17.0907 103.071 17.432C102.473 17.7733 101.919 18.328 101.407 19.096ZM144.474 24.536C145.071 22.9573 145.37 21.4853 145.37 20.12C145.37 17.6027 144.346 16.344 142.298 16.344C141.231 16.344 140.25 16.8347 139.354 17.816C138.501 18.7547 138.074 19.8213 138.074 21.016C138.074 21.8693 138.415 22.6373 139.098 23.32C140.079 24.2587 141.829 25.496 144.346 27.032C146.863 28.568 148.591 29.976 149.53 31.256C150.511 32.4933 151.002 33.9867 151.002 35.736C151.002 37.4427 150.575 39.0853 149.722 40.664C148.911 42.2427 147.759 43.5867 146.266 44.696C143.066 47.0853 138.906 48.28 133.786 48.28C131.013 48.28 128.559 47.5547 126.426 46.104C124.293 44.696 123.226 43.16 123.226 41.496C123.226 39.832 123.823 38.5093 125.018 37.528C126.255 36.5467 127.77 36.056 129.562 36.056C131.354 36.056 132.805 36.3973 133.914 37.08C133.359 38.488 133.082 39.6613 133.082 40.6C133.082 43.416 134.277 44.824 136.666 44.824C137.69 44.824 138.543 44.504 139.226 43.864C139.909 43.224 140.25 42.3493 140.25 41.24C140.25 39.064 138.415 36.824 134.746 34.52C131.759 32.5573 129.925 31.192 129.242 30.424C128.09 29.0587 127.514 27.5227 127.514 25.816C127.514 24.1093 127.919 22.4453 128.73 20.824C129.541 19.2027 130.693 17.816 132.186 16.664C135.301 14.2747 139.567 13.08 144.986 13.08C147.759 13.08 149.957 13.6347 151.578 14.744C153.242 15.8533 154.074 17.3467 154.074 19.224C154.074 21.1013 153.498 22.5733 152.346 23.64C151.237 24.7067 149.658 25.24 147.61 25.24C146.202 25.24 145.157 25.0053 144.474 24.536Z"
        />
      </svg>

      <svg
        width="179"
        height="30"
        viewBox="0 0 179 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 27L90.9534 25.6452" strokeWidth="6" strokeLinecap="round" />
        <path
          d="M90.5721 25.1326L91.3348 25.2639L13.5344 19.0398M90.5721 25.1326L9.33925 11.153L28.408 2L89.8093 12.2971C89.4279 16.5482 89.0466 25.0668 90.5721 25.1326ZM15.4412 13.0599L5.5255 18.3991L13.5344 19.0398M4.76275 25.1326L13.5344 19.0398"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M174.335 27L88.3814 25.6452"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M88.7627 25.1326L88 25.2639L165.8 19.0398M88.7627 25.1326L169.996 11.153L150.927 2L89.5255 12.2971C89.9069 16.5482 90.2882 25.0668 88.7627 25.1326ZM163.894 13.0599L173.809 18.3991L165.8 19.0398M174.572 25.1326L165.8 19.0398"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
   {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    height: 84px;
    align-items: center;
    justify-content: space-between;

    path {
      transition: 0.2s ease-in;
      stroke: ${({ theme }) => theme.text};
    }
    .text {
      fill: ${({ theme }) => theme.text};
      stroke: none;
    }
  }
`
