# Sanitize branch name action

This action sanitize branch name with RFC1123 standard
https://tools.ietf.org/html/rfc1123

## Inputs

### `branch-name`

**Required** The branch name.

## Outputs

### `sanitized-branch-name`

The sanitized branch name.

## Example usage

```
uses: yeouchien/sanitize-branch-name-action@v1
with:
  branch-name: 'mona the octocat'
```
