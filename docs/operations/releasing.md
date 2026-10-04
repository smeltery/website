# Releasing

Releases are automatic and follow the same flow as `smeltery/hab`. Every green
CI run on `main` gets the next patch tag and a release with the built site
attached.

```mermaid
sequenceDiagram
  participant Dev as Developer
  participant Main as main branch
  participant CI as ci.yml
  participant Auto as auto-release.yml
  participant Rel as release.yml
  Dev->>Main: merge or push
  Main->>CI: push event
  CI-->>Auto: workflow_run completed (success)
  Auto->>Auto: next patch tag (v0.1.0 if none)
  Auto->>Main: push tag
  Auto->>Rel: workflow_dispatch tag=vX.Y.Z
  Rel->>Rel: verify tag is main HEAD
  Rel->>Rel: flox activate, build, test
  Rel->>Rel: publish website-vX.Y.Z.tar.gz and .sha256
```

## Details

- A commit that already carries a release tag is skipped, so reruns are safe.
- Tags pushed with `GITHUB_TOKEN` do not trigger other workflows, so
  auto-release dispatches `release.yml` explicitly.
- For a minor or major bump, push the tag yourself, for example
  `git tag v0.2.0 && git push origin v0.2.0`. The release workflow runs on tag
  pushes too.

## Verifying an artifact

```console
$ gh release download vX.Y.Z -R smeltery/website
$ shasum -a 256 -c website-vX.Y.Z.tar.gz.sha256
```
