type LoadingState = {
  state: 'loading',
}
type SuccessState = {
  state: 'success',
  response: {
    body: string,
  }
}
type FailState = {
  state: 'fail',
  reason: string,
}
type ResourceLoadState = LoadingState | SuccessState | FailState;

const printLoginState = (res: ResourceLoadState) => {
  switch(res.state) {
    case 'success': {
      console.log(`😄 ${res.response.body}`);
      break;
    }

    case 'loading': {
      console.log('👀 loading...');
      break;
    }

    case 'fail': {
      console.log(`😱 ${res.reason}`);
      break;
    }

    // no default
  }
}

printLoginState({ state: 'loading' });
printLoginState({ state: 'success', response: { body: 'loaded' } });
printLoginState({ state: 'fail', reason: 'no network' });
