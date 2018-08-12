/**
 * Debounce function set timeout and clear timeout if function is called before timeout callback execution
 * @param callback
 * @param time
 * @param env
 */
const debounce = (callback, time, env) => {
	clearTimeout(env.state.debounceTimeout)
	const debounceTimeout = setTimeout(() => {
		callback()
	}, time)
	env.setState({ debounceTimeout })
}

export default debounce;
