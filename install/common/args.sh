#!/bin/bash
#
#
# ARG_OPTIONAL_BOOLEAN([kube-perceiver],[k],[Wether the kube perceiver is enabled.],[on])
# ARG_OPTIONAL_BOOLEAN([openshift-perceiver],[o],[Wether the openshift perceiver is enabled.],[off])
#

# ARG_OPTIONAL_SINGLE([scanned-registry],[p],[A registry url you will need to pull from if private registries.],[])
# ARG_OPTIONAL_SINGLE([scanned-registry-token],[t],[protoform version],[master])

# ARG_OPTIONAL_SINGLE([pcp-container-registry],[c],[Base docker repo for the applicaition.],[gcr.io/gke-verification/blackducksoftware ])
# ARG_OPTIONAL_SINGLE([pcp-container-version],[v],[perceptor version],[master])
# ARG_OPTIONAL_SINGLE([pcp-namespace],[n],[The namespace perceptor containers run in.],[nginx-webapp-logstash])

# ARG_OPTIONAL_SINGLE([hub-user],[U],[hub user],[master])
# ARG_OPTIONAL_SINGLE([hub-password],[W],[hub password],[master])
# ARG_OPTIONAL_SINGLE([hub-host],[H],[hub hostname ],[nginx-webapp-logstash])
# ARG_OPTIONAL_SINGLE([hub-port],[P],[hub port ],[8443])
# ARG_OPTIONAL_SINGLE([hub-max-concurrent-scans],[C],[maximum scans at a time for the hub],[7])

# ARG_OPTIONAL_BOOLEAN([proto-prompt],[i],[prompt for values rather then expecting them all at the command line],[off])

# ARG_HELP([The general script's help msg])
# ARGBASH_GO()
# needed because of Argbash --> m4_ignore([
### START OF CODE GENERATED BY Argbash v2.6.1 one line above ###
# Argbash is a bash code generator used to get arguments parsing right.
# Argbash is FREE SOFTWARE, see https://argbash.io for more info
# Generated online by https://argbash.io/generate

# When called, the process ends.
# Args:
# 	$1: The exit message (print to stderr)
# 	$2: The exit code (default is 1)
# if env var _PRINT_HELP is set to 'yes', the usage is print to stderr (prior to )
# Example:
# 	test -f "$_arg_infile" || _PRINT_HELP=yes die "Can't continue, have to supply file as an argument, got '$_arg_infile'" 4
die()
{
	local _ret=$2
	test -n "$_ret" || _ret=1
	test "$_PRINT_HELP" = yes && print_help >&2
	echo "$1" >&2
	exit ${_ret}
}

# Function that evaluates whether a value passed to it begins by a character
# that is a short option of an argument the script knows about.
# This is required in order to support getopts-like short options grouping.
begins_with_short_option()
{
	local first_option all_short_options
	all_short_options='koptcvnUWHPCih'
	first_option="${1:0:1}"
	test "$all_short_options" = "${all_short_options/$first_option/}" && return 1 || return 0
}



# THE DEFAULTS INITIALIZATION - OPTIONALS
_arg_kube_perceiver="on"
_arg_openshift_perceiver="off"
_arg_scanned_registry=
_arg_scanned_registry_token="master"
_arg_pcp_container_registry="gcr.io/gke-verification/blackducksoftware"
_arg_pcp_container_version="master"
_arg_pcp_namespace="hub"
_arg_hub_user="sysadmin"
_arg_hub_password=""
_arg_hub_host="nginx-webapp-logstash"
_arg_hub_port="8443"
_arg_hub_max_concurrent_scans="7"
_arg_proto_prompt="off"

# Function that prints general usage of the script.
# This is useful if users asks for it, or if there is an argument parsing error (unexpected / spurious arguments)
# and it makes sense to remind the user how the script is supposed to be called.
print_help ()
{
	printf '%s\n' "The general script's help msg"
	printf 'Usage: %s [-k|--(no-)kube-perceiver] [-o|--(no-)openshift-perceiver] [-p|--scanned-registry <arg>] [-t|--scanned-registry-token <arg>] [-c|--pcp-container-registry <arg>] [-v|--pcp-container-version <arg>] [-n|--pcp-namespace <arg>] [-U|--hub-user <arg>] [-W|--hub-password <arg>] [-H|--hub-host <arg>] [-P|--hub-port <arg>] [-C|--hub-max-concurrent-scans <arg>] [-i|--(no-)proto-prompt] [-h|--help]\n' "$0"
	printf '\t%s\n' "-k,--kube-perceiver,--no-kube-perceiver: Wether the kube perceiver is enabled. (on by default)"
	printf '\t%s\n' "-o,--openshift-perceiver,--no-openshift-perceiver: Wether the openshift perceiver is enabled. (off by default)"
	printf '\t%s\n' "-p,--scanned-registry: A registry url you will need to pull from if private registries. (no default)"
	printf '\t%s\n' "-t,--scanned-registry-token: protoform version (default: 'master')"
	printf '\t%s\n' "-c,--pcp-container-registry: Base docker repo for the applicaition. (default: 'gcr.io/gke-verification/blackducksoftware ')"
	printf '\t%s\n' "-v,--pcp-container-version: perceptor version (default: 'master')"
	printf '\t%s\n' "-n,--pcp-namespace: The namespace perceptor containers run in. (default: 'nginx-webapp-logstash')"
	printf '\t%s\n' "-U,--hub-user: hub user (default: 'master')"
	printf '\t%s\n' "-W,--hub-password: hub password (default: 'master')"
	printf '\t%s\n' "-H,--hub-host: hub hostname  (default: 'nginx-webapp-logstash')"
	printf '\t%s\n' "-P,--hub-port: hub port  (default: '8443')"
	printf '\t%s\n' "-C,--hub-max-concurrent-scans: maximum scans at a time for the hub (default: '7')"
	printf '\t%s\n' "-i,--proto-prompt,--no-proto-prompt: prompt for values rather then expecting them all at the command line (off by default)"
	printf '\t%s\n' "-h,--help: Prints help"
}

# The parsing of the command-line
parse_commandline ()
{
	while test $# -gt 0
	do
		_key="$1"
		case "$_key" in
			# The kube-perceiver argurment doesn't accept a value,
			# we expect the --kube-perceiver or -k, so we watch for them.
			-k|--no-kube-perceiver|--kube-perceiver)
				_arg_kube_perceiver="on"
				test "${1:0:5}" = "--no-" && _arg_kube_perceiver="off"
				;;
			# We support getopts-style short arguments clustering,
			# so as -k doesn't accept value, other short options may be appended to it, so we watch for -k*.
			# After stripping the leading -k from the argument, we have to make sure
			# that the first character that follows coresponds to a short option.
			-k*)
				_arg_kube_perceiver="on"
				_next="${_key##-k}"
				if test -n "$_next" -a "$_next" != "$_key"
				then
					begins_with_short_option "$_next" && shift && set -- "-k" "-${_next}" "$@" || die "The short option '$_key' can't be decomposed to ${_key:0:2} and -${_key:2}, because ${_key:0:2} doesn't accept value and '-${_key:2:1}' doesn't correspond to a short option."
				fi
				;;
			# See the comment of option '--kube-perceiver' to see what's going on here - principle is the same.
			-o|--no-openshift-perceiver|--openshift-perceiver)
				_arg_openshift_perceiver="on"
				test "${1:0:5}" = "--no-" && _arg_openshift_perceiver="off"
				;;
			# See the comment of option '-k' to see what's going on here - principle is the same.
			-o*)
				_arg_openshift_perceiver="on"
				_next="${_key##-o}"
				if test -n "$_next" -a "$_next" != "$_key"
				then
					begins_with_short_option "$_next" && shift && set -- "-o" "-${_next}" "$@" || die "The short option '$_key' can't be decomposed to ${_key:0:2} and -${_key:2}, because ${_key:0:2} doesn't accept value and '-${_key:2:1}' doesn't correspond to a short option."
				fi
				;;
			# We support whitespace as a delimiter between option argument and its value.
			# Therefore, we expect the --scanned-registry or -p value.
			# so we watch for --scanned-registry and -p.
			# Since we know that we got the long or short option,
			# we just reach out for the next argument to get the value.
			-p|--scanned-registry)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_scanned_registry="$2"
				shift
				;;
			# We support the = as a delimiter between option argument and its value.
			# Therefore, we expect --scanned-registry=value, so we watch for --scanned-registry=*
			# For whatever we get, we strip '--scanned-registry=' using the ${var##--scanned-registry=} notation
			# to get the argument value
			--scanned-registry=*)
				_arg_scanned_registry="${_key##--scanned-registry=}"
				;;
			# We support getopts-style short arguments grouping,
			# so as -p accepts value, we allow it to be appended to it, so we watch for -p*
			# and we strip the leading -p from the argument string using the ${var##-p} notation.
			-p*)
				_arg_scanned_registry="${_key##-p}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-t|--scanned-registry-token)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_scanned_registry_token="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--scanned-registry-token=*)
				_arg_scanned_registry_token="${_key##--scanned-registry-token=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-t*)
				_arg_scanned_registry_token="${_key##-t}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-c|--pcp-container-registry)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_pcp_container_registry="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--pcp-container-registry=*)
				_arg_pcp_container_registry="${_key##--pcp-container-registry=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-c*)
				_arg_pcp_container_registry="${_key##-c}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-v|--pcp-container-version)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_pcp_container_version="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--pcp-container-version=*)
				_arg_pcp_container_version="${_key##--pcp-container-version=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-v*)
				_arg_pcp_container_version="${_key##-v}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-n|--pcp-namespace)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_pcp_namespace="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--pcp-namespace=*)
				_arg_pcp_namespace="${_key##--pcp-namespace=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-n*)
				_arg_pcp_namespace="${_key##-n}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-U|--hub-user)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_hub_user="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--hub-user=*)
				_arg_hub_user="${_key##--hub-user=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-U*)
				_arg_hub_user="${_key##-U}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-W|--hub-password)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_hub_password="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--hub-password=*)
				_arg_hub_password="${_key##--hub-password=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-W*)
				_arg_hub_password="${_key##-W}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-H|--hub-host)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_hub_host="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--hub-host=*)
				_arg_hub_host="${_key##--hub-host=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-H*)
				_arg_hub_host="${_key##-H}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-P|--hub-port)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_hub_port="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--hub-port=*)
				_arg_hub_port="${_key##--hub-port=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-P*)
				_arg_hub_port="${_key##-P}"
				;;
			# See the comment of option '--scanned-registry' to see what's going on here - principle is the same.
			-C|--hub-max-concurrent-scans)
				test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
				_arg_hub_max_concurrent_scans="$2"
				shift
				;;
			# See the comment of option '--scanned-registry=' to see what's going on here - principle is the same.
			--hub-max-concurrent-scans=*)
				_arg_hub_max_concurrent_scans="${_key##--hub-max-concurrent-scans=}"
				;;
			# See the comment of option '-p' to see what's going on here - principle is the same.
			-C*)
				_arg_hub_max_concurrent_scans="${_key##-C}"
				;;
			# See the comment of option '--kube-perceiver' to see what's going on here - principle is the same.
			-i|--no-proto-prompt|--proto-prompt)
				_arg_proto_prompt="on"
				test "${1:0:5}" = "--no-" && _arg_proto_prompt="off"
				;;
			# See the comment of option '-k' to see what's going on here - principle is the same.
			-i*)
				_arg_proto_prompt="on"
				_next="${_key##-i}"
				if test -n "$_next" -a "$_next" != "$_key"
				then
					begins_with_short_option "$_next" && shift && set -- "-i" "-${_next}" "$@" || die "The short option '$_key' can't be decomposed to ${_key:0:2} and -${_key:2}, because ${_key:0:2} doesn't accept value and '-${_key:2:1}' doesn't correspond to a short option."
				fi
				;;
			# See the comment of option '--kube-perceiver' to see what's going on here - principle is the same.
			-h|--help)
				print_help
				exit 0
				;;
			# See the comment of option '-k' to see what's going on here - principle is the same.
			-h*)
				print_help
				exit 0
				;;
			*)
				_PRINT_HELP=yes die "FATAL ERROR: Got an unexpected argument '$1'" 1
				;;
		esac
		shift
	done
}

# Now call all the functions defined above that are needed to get the job done
parse_commandline "$@"

# OTHER STUFF GENERATED BY Argbash

### END OF CODE GENERATED BY Argbash (sortof) ### ])
# [ <-- needed because of Argbash

##################

# ] <-- needed because of Argbash
