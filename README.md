# TFH_Front


## Docker Image

- Exampe to Build and Push Docker image

```bash
    docker build -t sockmal/tfh-front:0.1.0 .

    docker push sockmal/tfh-front:0.1.0
```

## K8s manifest

To deploy on openshift or Kubernetes we have to use the following files on `k8s-manifest` folder.